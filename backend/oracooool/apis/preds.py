from flask import Blueprint, jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required
import werkzeug
from shared import parse_uuid, format_exception
from db.func import preds as f


preds = Blueprint("preds", __name__, url_prefix="/preds")

@preds.route("/", methods=["POST"])
@jwt_required(locations=["cookies"])
def my_predict():
    try:
    
        if not request.is_json:
            return jsonify({"err": "mising 'application/json' header"}), 400

        
        # get the data
        data = request.get_json()
        user_id = parse_uuid(get_jwt_identity())
        circuit_id = parse_uuid(data.get("circuit"))
        preds = data.get("preds", [])
        print(len(preds))

        if (
            len(preds) != 3
        ):
            return jsonify({"err": "invalid data"}), 200

        f.create_prediction(user_id=user_id, circuit_id=circuit_id, preds=preds)

        return jsonify({"msg": "done"}), 200

    except ValueError:
        return jsonify({"err": "login required"})

    except werkzeug.exceptions.BadRequest:
        return jsonify({"err": "mising 'application/json' header"}), 400

    except Exception as err:
        print(format_exception(err))
        return jsonify({"err": "server error"}), 500


@preds.route("/<user_id>/<circuit_id>", methods=["GET"])
@jwt_required(locations=["cookies"])
def get_prediction(user_id: str, circuit_id: str):
    try:
        parse_uuid(get_jwt_identity())
        user_id = parse_uuid(user_id)
        circuit_id = parse_uuid(circuit_id)

        pred = f.get_prediction(user_id=user_id, circuit_id=circuit_id)

        return jsonify({"prediction": pred.d()}), 200

    except ValueError:
        return jsonify({"err": "login required"})

    except Exception as err:
        print(format_exception(err))
        return jsonify({"err": "server error"}), 500
