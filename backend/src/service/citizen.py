
import repository.citizen as CitizenRepo
import repository.user as UserRepo
from flask import request
from model.citizen import Citizen

def add():
    result = None
    payload = dict(request.get_json())
    add_user = UserRepo.insertUser(payload["username"], payload["password"], payload["city"], payload["neighborhood"])
    if add_user:
        try:
            added = CitizenRepo.add(payload["username"], payload["names"], payload["lastnames"], payload["age"], payload["occupation"], payload["housemates"])
            if added > 0:
                result = payload["username"]
            else:
                UserRepo.deleteUser(payload["username"])
        except Exception as e:
            UserRepo.deleteUser(payload["username"])
    return result

def get():
    result = None
    payload = dict(request.get_json())
    get = CitizenRepo.get(payload["username"])
    if get:
        result = Citizen().setArr(get[0]).toMap()
    return result

def getEntriesCitizen():#check this service!!
    result = None
    payload = dict(request.get_json())
    get = CitizenRepo.getEntriesCitizen(payload['username'])
    if get:
        result = get
    return result

def update():
    result = None
    payload = dict(request.get_json())
    update = CitizenRepo.update(Citizen(**payload))
    if update > 0:
        result = get()
    return result

def getRiskEntries():
    result = None
    payload = dict(request.get_json())
    get = CitizenRepo.getRiskEntriesLevel(payload['username'])
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
