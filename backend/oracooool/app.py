import os
from datetime import timedelta
from typing import Any

from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from .apis.drivers import drivers

# CONFIG
load_dotenv()

app = Flask(__name__)
CORS(app, supports_credentials=True)

app_config = {
    # flask app
    "SECRET_KEY": os.getenv("FLASK_SESSION_SECRET_KEY"),
    # jwt
    "JWT_SECRET_KEY": os.getenv("FLASK_JWT_SESSION_SECRET_KEY"),
    "JWT_TOKEN_LOCATION": ["cookies"],
    "JWT_COOKIE_SAMESITE": "Strict",
    "JWT_COOKIE_SECURE": True,
    "JWT_ACCESS_TOKEN_EXPIRES": timedelta(days=30),
    "JWT_COOKIE_CSRF_PROTECT": False
}

# JWT
app.config.from_mapping(app_config)

# app config
jwt = JWTManager(app)

# Blueprints
app.register_blueprint(drivers, name="drivers")


@app.route("/", methods=["GET"])
def index() -> str:
    return "Hi there!"


@app.route("/healthcheck", methods=["GET"])
def health_check():
    return "Healthy: OK", 200


@app.errorhandler(404)
def not_found_error(error: Any):
    """The resource that was requested was not found on the server

    Args:
        error (Any): The error triggered

    Returns:
        404: a description of the error in JSON format
    """
    return jsonify(error=str(error)), 404
