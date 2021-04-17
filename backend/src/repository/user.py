
from conf.db import db
from datetime import date, datetime, timedelta
import const.roles as ROLES

def insertUser(username, password, city, neighborhood):
    query = "INSERT INTO User (username, pssword, city, neighborhood) values (%s,%s,%s,%s)"
    values = (username,password,city,neighborhood)
    result = db.crud(query,values)
    return result

def getUser(username):
    query = "SELECT * FROM User where username=%s"
    values = (username,)
    result = db.query(query, values)
    return result

def getUserRole(username):
    result = ""
    citizen_query = "SELECT COUNT(*) FROM Citizen WHERE username=%s"
    public_est_query = "SELECT COUNT(*) FROM PublicEstablishment WHERE username=%s"
    citizen = db.query(citizen_query, (username,))
    public_est = db.query(public_est_query, (username,))
    if citizen[0][0] == 1:
        result = ROLES.CITIZEN
    elif public_est[0][0] == 1:
        result = ROLES.PUBLIC_ESTABLISHMENT
    return result

def deleteUser(username):
    query = "DELETE FROM User where username=%s"
    values = (username,)
    result = db.crud(query, values)
    return result

def authenticate(username, password):
    query = "SELECT * FROM User where username=%s and pssword=%s"
    values = (username, password)
    result = db.query(query, values)
    return result
