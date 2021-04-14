
from flask import Blueprint, jsonify
import service.citizen as CitizenService
import const.values as VALUES
from conf.auth import auth
import const.roles as ROLES

app = Blueprint("citizen", __name__)

@app.route("/citizen", methods=['GET'])
def citizen():
    return jsonify({'res': 'hello citizen'})

@app.route("/citizen/add", methods=['POST'])
def add():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = CitizenService.addCitizen()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

@app.route("/citizen/get", methods=['POST'])
@auth(ROLES.CITIZEN)
def get():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = CitizenService.getCitizen()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

@app.route("/citizen/entries-citizen", methods=['POST'])
@auth(ROLES.CITIZEN)
def getEntriesCitizen():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = CitizenService.getEntriesCitizen()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

@app.route("/citizen/update", methods=['PUT'])
@auth(ROLES.CITIZEN)
def update():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = CitizenService.update()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)
