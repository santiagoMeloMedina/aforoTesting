
import repository.citizen as CitizenRepo
import repository.user as UserRepo
from flask import request
from model.citizen import Citizen

def addCitizen():
    result = None
    payload = dict(request.get_json())
    add_user = UserRepo.insertUser(payload["username"], payload["password"], payload["city"], payload["neighborhood"])
    if add_user:
        added = CitizenRepo.insertCitizen(payload["username"], payload["names"], payload["lastnames"], payload["age"], payload["occupation"], payload["housemates"])
        if added > 0:
            result = payload["username"]
    return result

def getCitizen():
    result = None
    payload = dict(request.get_json())
    get = CitizenRepo.getCitizen(payload["username"])
    if get:
        result = Citizen().setArr(get[0]).toMap()
    return result