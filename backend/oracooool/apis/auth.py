from flask import Blueprint, jsonify, make_response, request
from flask_jwt_extended import create_access_token, set_access_cookies, unset_jwt_cookies
import werkzeug
from shared import format_exception, UniqueDBError
from db.objects import User
from db.func import auth as f
from passlib.hash import pbkdf2_sha256


auth = Blueprint("auth", __name__, url_prefix="/auth")

@auth.route("/account", methods=["POST"])
def create_account():
    try:
        if not request.is_json:
            return jsonify({"err": "mising 'application/json' header"}), 400

        # get the data
        data = request.get_json()
        name = data.get("name", "")
        username = data.get("username", "")
        password = data.get("password", "")

        if not (
            len(name) > 3 
            and
            len(username) > 3
            and
            len(password) >= 5
        ):
            return jsonify({"err": "invalid data"}), 400

        name = name.strip()
        username = username.strip()
        password = password.strip()

        user = f.create_an_account(name=name, username=username, password=password)

        response = make_response(
            jsonify({"user": user.d()})
        )

        # create cookie and send response
        access_token = create_access_token(identity=user.id.hex)
        set_access_cookies(response, access_token)
        return response, 200

    except werkzeug.exceptions.BadRequest:
        return jsonify({"err": "mising 'application/json' header"}), 400

    except UniqueDBError:
        return jsonify({"err": "user alreasy exists"}), 400

    except Exception as err:
        print(format_exception(err))
        return jsonify({"err": "server error"}), 500


@auth.route("/login", methods=["POST"])
def login():
    try:
        if not request.is_json:
            return jsonify({"err": "mising 'application/json' header"}), 400

        # get the data
        data = request.get_json()
        username = data.get("username", "")
        password = data.get("password", "")

        if not (
            len(username) > 3
            and
            len(password) >= 5
        ):
            return jsonify({"err": "invalid data"}), 400

        username = username.strip()
        password = password.strip()

        user = f.get_user_by_username(username=username)
        if not isinstance(user, User):
            return jsonify({"err": "invalid username"}), 400

        if pbkdf2_sha256.verify(password, user.password):
            response = make_response(
                jsonify({"user": user.d()})
            )

            # create cookie and send response
            access_token = create_access_token(identity=user.id.hex)
            set_access_cookies(response, access_token)
            return response, 200

        else:
            return jsonify({"err": "invalid credentials"}), 400

    except werkzeug.exceptions.BadRequest:
        return jsonify({"err": "mising 'application/json' header"}), 400

    except Exception as err:
        print(format_exception(err))
        return jsonify({"err": "server error"}), 500
    

@auth.route("/logout", methods=["POST"])
def logout():
    try:
        response = jsonify({"msg": "logged out"})
        unset_jwt_cookies(response)
        return response, 200

    except Exception as err:
        print(format_exception(err))
        return jsonify({"err": "server error"}), 500
