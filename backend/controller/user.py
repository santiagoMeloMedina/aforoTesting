
from flask import Blueprint, jsonify

app = Blueprint("user", __name__)

@app.route("/user", methods=['GET'])
def user():
    return jsonify({'res': 'hello'})