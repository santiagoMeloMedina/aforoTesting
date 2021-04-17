from conf.db import db

from datetime import date, datetime, timedelta

def add(username,names,lastnames,age,occupation,housemates):
    query = "INSERT INTO Citizen (username,names,lastnames,age,occupation,housemates) values (%s,%s,%s,%s,%s,%s)"
    values = (username,names,lastnames,age,occupation,housemates)
    result = db.crud(query,values)
    return result

def get(username):
    query = "SELECT * from Citizen where username=%s"
    values = (username,)
    result = db.query(query,values)
    return result

def update(citizen):
    mapped = citizen.toMap()
    fields = []
    for field in mapped:
        if field != "username" and mapped[field] is not None:
            fields.append(field)
    subquery = ','.join([f"{field} = %s" for field in fields])
    query = f"UPDATE Citizen set {subquery} where username = %s"
    values = [f"{mapped[field]}" for field in fields]+[mapped["username"]]
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
    valuesOccupation = ("occupation",occupation)
    result = db.query(query,valuesAge)[0][0] + db.query(query,valuesHousemates)[0][0] + db.query(query,valuesOccupation)[0][0]
    return result
