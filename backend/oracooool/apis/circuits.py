from flask import Blueprint, jsonify
from db.func import circuits as f


circuits = Blueprint("circuits", __name__, url_prefix="/circuits")

@circuits.route("/", methods=["GET"])
def get_all_circuits():
    circuits = f.get_all_circuits()
    return jsonify(
        {
            "circuits": [circuit.d() for circuit in circuits],
            "count": len(circuits)
        }
    ), 200
