
import repository.user as UserRepo
from flask import request
from model.user import User
import jwt
from const.keys import SECRET_JWT_KEY as SK

def addUser():
    result = None
    payload = dict(request.get_json())
    added = UserRepo.insertUser(payload["username"], payload["password"], payload["city"], payload["neighborhood"])
    if added > 0:
        result = payload["username"]
    return result

def getUser():
    result = None
    payload = dict(request.get_json())
    get = UserRepo.getUser(payload["username"])
    if get:
        result = User().setArr(get[0]).toMap()
    return result

def authenticate():
    result = None
    payload = dict(request.get_json())
    auth = UserRepo.authenticate(payload["username"], payload["password"])
    encoded = jwt.encode({"user" : payload["username"]}, SK, algorithm="HS256")
    if auth:
        result = encoded
    return result