
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

def updateName():
    result = None
    payload = dict(request.get_json())
    update = CitizenRepo.updateName(payload['username'],payload['names'])
    if update:
        result = Citizen().setArr(update[0]).toMap()
    return result

def updateLastName():
    result = None
    payload = dict(request.get_json())
    update = CitizenRepo.updateLastname(payload['username'],payload['lastnames'])
    if update:
        result = Citizen().setArr(update[0]).toMap()
    return result

def getEntries():#check this service!!
    result = None
    payload = dict(request.get_json())
    get = CitizenRepo.getEntriesCitizen(payload['username'])
    if get:
        result = get
    return result

def getRisk():
    result = None
    payload = dict(request.get_json())
    get = CitizenRepo.getRiskLevel(payload['age'],payload['housemates'],payload['occupation'])
    if get:
        result = get
    return result




