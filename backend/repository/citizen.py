from conf.db import db

from datetime import date, datetime, timedelta



def insertCitizen(username,names,lastnames,age,occupation,housemates):
    query = "INSERT INTO CITIZEN (username,names,lastnames,age,occupation,housemates) values (%s,%s,%s,%s,%s,%s)"
    values = (username,names,lastnames,age,occupation,housemates)
    result = db.crud(query,values)
    return result


def getCitizen(username):
    query = "SELECT username,names,lastnames,age,occupation,housemates from Citizen where username=%s"
    values = (username,)
    result = db.query(query,values)
    return result


def updateName(username,newName):
    query = "UPDATE citizen set name = %s where username = %s"
    values = (newName,username)
    result = db.crud(query,values)
    return result

def updateLastname(username,newLastname):
    query = "UPDATE citizen set name = %s where username = %s"
    values = (newLastname,username)
    result = db.crud(query,values)
    return result

def getEntriesCitizen(username):
    query = "SELECT id,inDate,outDate,citizenUsername,publicEstUsername,temperature,mask from Entries where citizenUsername=%s"
    values = (username,)
    result = db.query(query,values)
    return result


def getRiskLevel(age,housemates,occupation):
    query = "SELECT percent from Parameters where tpe = %s and val = %s"
    valuesAge = ("age",age)
    valuesHousemates = ("housemates",housemates)
    valuesOccupation = ("ocuppation",occupation)
    result = db.query(query,valuesAge)+db.query(query,valuesHousemates)+db.query(query,valuesOccupation)
    return result


