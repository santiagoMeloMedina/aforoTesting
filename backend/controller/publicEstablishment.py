
from flask import Blueprint, jsonify
import service.publicEstablishment as PublicEstablishmentService
import const.values as VALUES

app = Blueprint("publicEstablishment", __name__)

@app.route("/publicEstablishment", methods=['GET'])
def publicEstablishment():
    return jsonify({'res': 'hello public establishment'})

@app.route("/publicEstablishment/add", methods=['POST'])
def add():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = PublicEstablishmentService.addPublicEstablishment()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

@app.route("/publicEstablishment/get", methods=['POST'])
def get():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = PublicEstablishmentService.getPublicEstablishment()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)

@app.route("/publicEstablishment/entries", methods=['POST'])
def entries():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = PublicEstablishmentService.getEntries()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)


@app.route("/publicEstablishment/update", methods=['PUT'])
def update():
    result = { VALUES.REPONSE: VALUES.ERROR }
    try:
        response = PublicEstablishmentService.update()
        result[VALUES.REPONSE] = response
    except Exception as e:
        print(e)
    return jsonify(result)
