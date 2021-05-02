import repository.publicEstablishment as PublicEstRepo
import repository.user as UserRepo
from flask import request
from model.publicEstablishment import PublicEstablishment
from datetime import datetime

def add():
    result = None
    payload = dict(request.get_json())
    add_user = UserRepo.insertUser(payload["username"], payload["password"], payload["city"], payload["neighborhood"])
    if add_user:
        try:
            added = PublicEstRepo.add(payload['username'],payload['name'],payload['category'] ,payload['capacity'])
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
    get = PublicEstRepo.get(payload["username"])
    if get:
        result = PublicEstablishment().setArr(get[0]).toMap()
    return result

def update():
    result = None
    payload = dict(request.get_json())
    update = PublicEstRepo.update(PublicEstablishment(**payload))
    if update > 0:
        result = get()
    return result

def registerEntry():
    result = None
    payload = dict(request.get_json())
    if checkForEntry(payload['temperature'],payload['mask'],payload['publicEstUsername']):
        register = PublicEstRepo.registerEntry(payload['citizenUsername'],payload['publicEstUsername'],payload['temperature'],payload['mask'])
        if register:
            result = { 
                        "username": payload['citizenUsername'], 
                        "publicEstablishment": payload['publicEstUsername'], 
                        "date": datetime.now().strftime('%Y-%m-%d %H:%M:%S') 
                    }
            PublicEstRepo.updateActualEntry(payload['publicEstUsername'])
    return result

def registerExit():
    result = None
    payload = dict(request.get_json())
    register = PublicEstRepo.registerExit(payload['citizenUsername'],payload['publicEstUsername'])
    print(register)
    if register:
        result = { 
                    "username": payload['citizenUsername'], 
                    "publicEstablishment": payload['publicEstUsername'], 
                    "date": datetime.now().strftime('%Y-%m-%d %H:%M:%S') 
                }
        PublicEstRepo.updateActualExit(payload['publicEstUsername'])
    return result

def getEntries():
    result = None
    payload = dict(request.get_json())
    get = PublicEstRepo.getEntriesPublicEstablishment(payload['username'])
    if get:
        result = get
    return result


def checkForEntry(temperature,mask,publicEstUsername):
    result = None
    get = PublicEstRepo.getOccupation(publicEstUsername)
    result = temperature <= 37.5 and mask and get[0][0]+1<= get[0][1] #actual+1 <= capacity
    return result


