from flask import Blueprint, jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required
import werkzeug
from shared import parse_uuid, format_exception
from db.func import groups as f


groups = Blueprint("groups", __name__, url_prefix="/groups")

@groups.route("/", methods=["GET"])
@jwt_required(locations=["cookies"])
def get_my_groups():

    try:
        user_id = parse_uuid(get_jwt_identity())
    except ValueError:
        return jsonify({"err": "login required"})

    groups = f.get_my_groups(user_id=user_id)

    return jsonify(
        {
            "groups": [group.d() for group in groups],
            "count": len(groups)
        }
    ), 200


@groups.route("/<group_id>/join", methods=["POST"])
@jwt_required(locations=["cookies"])
def join_group(group_id: str):

    try:
        user_id = parse_uuid(get_jwt_identity())
        group_id = parse_uuid(group_id)
    except ValueError:
        return jsonify({"err": "login required or group id is not valid"})

    joined = f.join_group(user_id=user_id, group_id=group_id)

    if joined:
        return jsonify({'msg': 'success'}), 200
    
    return jsonify({'msg': 'error'}), 400


@groups.route("/<group_id>/remove", methods=["POST"])
@jwt_required(locations=["cookies"])
def remove_group(group_id: str):

    try:
        user_id = parse_uuid(get_jwt_identity())
        group_id = parse_uuid(group_id)
    except ValueError:
        return jsonify({"err": "login required or group id is not valid"})

    joined = f.remove_group(user_id=user_id, group_id=group_id)

    if joined:
        return jsonify({'msg': 'success'}), 200
    
    return jsonify({'msg': 'error'}), 400


@groups.route("/", methods=["POST"])
@jwt_required(locations=["cookies"])
def create_a_group():
    try:
    
        if not request.is_json:
            return jsonify({"err": "mising 'application/json' header"}), 400

        
        # get the data
        data = request.get_json()
        user_id = parse_uuid(get_jwt_identity())
        name = data.get("name", "")
        description = data.get("description", "")

        if not (
            len(name) > 3
            and
            len(description) > 5
        ):
            return jsonify({"err": "invalid data"}), 200

        group = f.create_a_group(name=name, description=description, owner=user_id)

        return jsonify({"group": group.d()}), 200

    except ValueError:
        return jsonify({"err": "login required"})

    except werkzeug.exceptions.BadRequest:
        return jsonify({"err": "mising 'application/json' header"}), 400

    except Exception as err:
        print(format_exception(err))
        return jsonify({"err": "server error"}), 500
