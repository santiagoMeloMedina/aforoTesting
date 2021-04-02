import repository.publicEst as PublicEstRepo
import repository.user as UserRepo
from flask import request
from model.publicEstablishment import PublicEstablishment


def addPublicEstablishment():
    result = None
    payload = dict(request.get_json())
    add_user = UserRepo.insertUser(payload["username"], payload["password"], payload["city"], payload["neighborhood"])
    if add_user:
        added = PublicEstRepo.insertPublicEstablishment(payload['username'],payload['name'],payload['category'] ,payload['capacity'])
        if added > 0:
            result = payload["username"]
    return result

def getPublicEstablishment():
    result = None
    payload = dict(request.get_json())
    get = PublicEstRepo.getPublicEstablishment(payload["username"])
    if get:
        result = PublicEstablishment().setArr(get[0]).toMap()
    return result

def updateName():
    result = None
    payload = dict(request.get_json())
    update = PublicEstRepo.updateName(payload['username'],payload['name'])
    if update:
        result = PublicEstablishment().setArr(update[0]).toMap()
    return result


def registerEntry():#revisar que el usuario este registrado antes de entrar
    result = None
    payload = dict(request.get_json())
    add_entry = PublicEstRepo.registerEntry(payload['citizenUsername'],payload['publicEstUsername'],payload['temperature'],payload['mask'])
    if add_entry:
        result = payload['citizenUsername']
    return result


#TODO registerExit()


def getEntries():
    result = None
    payload = dict(request.get_json())
    get = PublicEstRepo.getEntriesPublicEstablishment(payload['username'])
    if get:
        result = get
    return result


