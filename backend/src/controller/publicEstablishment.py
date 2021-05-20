
from flask import Blueprint, jsonify
import service.publicEstablishment as PublicEstablishmentService
import const.values as VALUES
from conf.auth import auth
import const.roles as ROLES

app = Blueprint("publicEstablishment", __name__)

@app.route("/publicEstablishment", methods=['GET'])
def publicEstablishment():
    return jsonify({'res': 'hello public establishment'})

@app.route("/publicEstablishment/add", methods=['POST'])
def add():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = PublicEstablishmentService.add()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

@app.route("/publicEstablishment/get", methods=['POST'])
@auth(ROLES.PUBLIC_ESTABLISHMENT)
def get():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = PublicEstablishmentService.get()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

@app.route("/publicEstablishment/get/categories", methods=['GET'])
def getCategories():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = PublicEstablishmentService.getCategories()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

@app.route("/publicEstablishment/entries/<int:start>/<int:quantity>", methods=['POST'])
@auth(ROLES.PUBLIC_ESTABLISHMENT)
def entries(start, quantity):
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = PublicEstablishmentService.getEntries(start, quantity)
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

@app.route("/publicEstablishment/update", methods=['PUT'])
@auth(ROLES.PUBLIC_ESTABLISHMENT)
def update():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = PublicEstablishmentService.update()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

@app.route("/publicEstablishment/register-entry", methods=['POST'])
@auth(ROLES.PUBLIC_ESTABLISHMENT)
def registerEntry():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = PublicEstablishmentService.registerEntry()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

@app.route("/publicEstablishment/register-exit", methods=['POST'])
@auth(ROLES.PUBLIC_ESTABLISHMENT)
def registerExit():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = PublicEstablishmentService.registerExit()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

