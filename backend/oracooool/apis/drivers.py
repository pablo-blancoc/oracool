from flask import Blueprint, jsonify
from db.func import drivers as f


drivers = Blueprint("drivers", __name__, url_prefix="/drivers")

@drivers.route("/", methods=["GET"])
def get_all_drivers():
    drivers = f.get_all_drivers()
    return jsonify(
        {
            "drivers": [driver.d() for driver in drivers],
            "count": len(drivers)
        }
    ), 200
