
from flask import Blueprint, jsonify
import service.user as UserService
import const.values as VALUES

app = Blueprint("user", __name__)

@app.route("/user", methods=['GET'])
def user():
    return jsonify({'res': 'hello user'})

@app.route("/user/add", methods=['POST'])
def add():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = UserService.addUser()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

@app.route("/user/get", methods=['POST'])
def get():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = UserService.getUser()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

@app.route("/user/auth", methods=['POST'])
def auth():
    result = { VALUES.REPONSE : VALUES.ERROR}
    try:
        response = UserService.authenticate()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)