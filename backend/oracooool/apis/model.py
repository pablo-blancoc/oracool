from flask import Blueprint, jsonify
from shared import parse_uuid
from db.func import model as f


model = Blueprint("model", __name__, url_prefix="/model")

@model.route("/", methods=["GET"])
def invalid_predict():
    return jsonify({'error': 'invalid circuit id'})

@model.route("/<circuit_id>", methods=["GET"])
def predict(circuit_id: str):
    try:
        cid = parse_uuid(circuit_id)
        preds = f.predict(circuit=cid)

    except ValueError:
        return jsonify({'error': 'invalid circuit id'})
    
    return jsonify({"prediction": [pred.d() for pred in preds]}), 200
