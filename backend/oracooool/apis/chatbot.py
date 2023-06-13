from flask import Blueprint,jsonify,request
import os
import openai
from dotenv import load_dotenv
from db.func import messages
load_dotenv()

chatbot = Blueprint("chatbot", __name__, url_prefix="/chatbot")
openai.api_key = os.getenv("GPTAPI")

@chatbot.route("/", methods=["GET"])
def check_bot_status():
    try:
        response = openai.Model.retrieve("ada")
        return response, 200
    except Exception as e:
        return jsonify({"err": str(e)}), 500


#Check documentation for request body https://platform.openai.com/docs/api-reference/completions/create
@chatbot.route("/send_prompt", methods=["POST"])
def message_to_prompt():
    try:
        prompt = request.json["prompt"]
        response = openai.Completion.create(
            engine="ada",
            prompt=prompt,
            temperature=0.9,
            max_tokens=150,
            frequency_penalty=0,
            presence_penalty=0.6,
        )
        messages.upload_message(request.json["user_id"], request.json["prompt"], True)
        messages.upload_message(request.json["user_id"], response["choices"][0]["text"], False)
        return jsonify({"response": response["choices"][0]["content"]}), 200
    except Exception as e:
        return jsonify({"err": str(e)}), 500

@chatbot.route("/get_messages", methods=["GET"])
def get_messages():
    try:
        user_id = request.json["user_id"]
        response = messages.retrieve_all_messages(user_id)
        return jsonify({"response": response}), 200
    except Exception as e:
        return jsonify({"err": str(e)}), 500
