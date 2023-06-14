from flask import Blueprint,jsonify,request
import os
import openai
from dotenv import load_dotenv
from flask_jwt_extended import get_jwt_identity, jwt_required
from shared import parse_uuid, format_exception
from db.func import messages
load_dotenv()

chatbot = Blueprint("chatbot", __name__, url_prefix="/chatbot")
openai.api_key = os.getenv("GPTAPI")

@chatbot.route("/", methods=["GET"])
def check_bot_status():
    try:
        response = openai.Model.retrieve("text-davinci-003")
        return response, 200
    except Exception as e:
        return jsonify({"err": str(e)}), 500


#Check documentation for request body https://platform.openai.com/docs/api-reference/completions/create
@chatbot.route("/send_prompt", methods=["POST"])
# @jwt_required(locations=["cookies"])
def message_to_prompt():
    # try:
    #     user_id = parse_uuid(get_jwt_identity())
    # except ValueError:
    #     return jsonify({"err": "login required"})
    try:
        prompt = request.json["prompt"]
        # print(prompt)
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            temperature=0.9,
            max_tokens=150,
            frequency_penalty=0,
            presence_penalty=0.6,
        )
        gpt_reponse = response["choices"][0]["text"]
        # messages.upload_message(user_id, prompt, True)
        # messages.upload_message(user_id, gpt_reponse, False)
        return jsonify({"response": gpt_reponse}), 200
    except ImportError as e:
        return jsonify({"Error": str(e)}), 500

@chatbot.route("/get_messages", methods=["GET"])
@jwt_required(locations=["cookies"])
def get_messages():
    try:
        user_id = parse_uuid(get_jwt_identity())
        response = messages.retrieve_all_messages_by_user(user_id)
        print(response)
        return jsonify({"response": response}), 200
    except Exception as e:
        return jsonify({"err": str(e)}), 500
