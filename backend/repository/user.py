
from conf.db import db
from datetime import date, datetime, timedelta

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
