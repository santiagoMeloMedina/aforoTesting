
from conf.db import db

from datetime import date, datetime, timedelta

def insertUser(username,password,city,neighborhood):
    query = "INSERT INTO USER (username,password,city,neighborhood) values (%s,%s,%s,%s)"
    values = (username,password,city,neighborhood)
    #query = f"""INSERT INTO USER (username,password,city,neighborhood) 
    #VALUES ({username},{password},{city},{neighborhood}) 
    #"""
    result = db.crud(query,values)
    return result


def getUser(username):
    query = "SELECT username,password,city,neighborhood FROM User where username=%s"
    values = (username,)
    result = db.query(query,values)
    return result

def getPassword(username):
    query = "SELECT password from User where username=%s"
    values = (username,)
    result = db.query(query,values)
    return result




