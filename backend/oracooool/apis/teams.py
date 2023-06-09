from flask import Blueprint, jsonify
from shared import parse_uuid, format_exception
from db.func import teams as f


teams = Blueprint("teams", __name__, url_prefix="/teams")

@teams.route("/", methods=["GET"])
def get_all_teams():
    teams = f.get_all_teams()
    return jsonify(
        {
            "teams": [team.d() for team in teams],
            "count": len(teams)
        }
    ), 200


@teams.route("/<team_id>", methods=["GET"])
def get_a_team(team_id: str):
    try:
        team_id = parse_uuid(team_id)

        team = f.get_a_team(team_id=team_id)
        return jsonify({"team": team.d()}), 200
    
    except ValueError:
        return jsonify({"msg": "invalid data"}), 400
    except Exception as err:
        print(format_exception(err))
        return jsonify({"msg": "server error"}), 500


@teams.route("/<team_id>/drivers", methods=["GET"])
def get_drivers_of_team(team_id: str):
    try:
        team_id = parse_uuid(team_id)

        drivers = f.get_drivers_of_team(team_id=team_id)
        return jsonify({"drivers": [driver.d() for driver in drivers]}), 200
    
    except ValueError:
        return jsonify({"msg": "invalid data"}), 400
    except Exception as err:
        print(format_exception(err))
        return jsonify({"msg": "server error"}), 500
