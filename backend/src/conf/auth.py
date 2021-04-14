
import const.roles as ROLES
from flask import request, jsonify
from functools import update_wrapper
import jwt
import const.keys as KEYS

def auth(role):
    def decorator(func):
        def inner(*args, **kwargs):

            #Citizen authorization checking
            def citizen(role):
                result = jsonify({}), 403
                if role == ROLES.CITIZEN:
                    result = func(*args, **kwargs)
                return result

            #Public establishment checking
            def publicEst(role):
                result = jsonify({}), 403
                if role == ROLES.PUBLIC_ESTABLISHMENT:
                    result = func(*args, **kwargs)
                return result
            
            roles = { 
                ROLES.CITIZEN: citizen, 
                ROLES.PUBLIC_ESTABLISHMENT: publicEst 
            }

            try:
                auth_header = request.headers.get("authorization")
                payload = jwt.decode(auth_header, KEYS.SECRET_JWT_KEY, algorithms=[KEYS.JWT_ALGORITHM], verify=True)
                result = roles[role](payload["role"]) if payload["role"] else jsonify({}), 403
            except Exception as e:
                result = jsonify({ "response": str(e) }), 403
            return result
        return update_wrapper(inner, func)
    return decorator