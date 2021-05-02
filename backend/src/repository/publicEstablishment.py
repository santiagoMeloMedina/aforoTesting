
from conf.db import db
from datetime import date, datetime, timedelta
from model.publicEstablishment import PublicEstablishment


def add(username,name,category ,capacity):
    query = "INSERT INTO PublicEstablishment (username,name,category,capacity) values (%s,%s,%s,%s)"
    values = (username,name,category,capacity)
    result = db.crud(query,values)
    return result

def get(username):
    query = "SELECT * from PublicEstablishment where username=%s"
    values = (username,)
    result = db.query(query,values)
    return result

def getEntriesPublicEstablishment(username):
    query = "SELECT id,inDate,outDate,citizenUsername,publicEstUsername,temperature,mask from Entries where publicEstUsername=%s"
    values = (username,)
    result = db.query(query,values)
    return result
    
def update(publicEst):
    mapped = publicEst.toMap()
    fields = []
    for field in mapped:
        if field != "username" and mapped[field] is not None:
            fields.append(field)
    subquery = ','.join([f"{field} = %s" for field in fields])
    query = f"UPDATE PublicEstablishment set {subquery} where username = %s"
    values = [f"{mapped[field]}" for field in fields]+[mapped["username"]]
    result = db.crud(query,values)
    return result

def updateActualEntry(publicEstUsername):
    query = "UPDATE PublicEstablishment set actual = actual+1 where username = %s"
    values = (publicEstUsername,)
    result = db.crud(query,values)
    return result

def updateActualExit(publicEstUsername):
    query = "UPDATE PublicEstablishment set actual = actual-1 where username = %s"
    values = (publicEstUsername,)
    result = db.crud(query,values)
    return result
    

def registerEntry(citizenUsername, publicEstUsername, temperature,mask):
    query = "INSERT INTO Entries (citizenUsername,publicEstUsername,temperature,mask) values (%s,%s,%s,%s)"
    values = (citizenUsername,publicEstUsername,temperature,mask)
    result = db.crud(query,values)
    return result

def getLastEntry(citizenUsername, publicEstUsername):
    query = "SELECT * FROM Entries where citizenUsername = %s and publicEstUsername = %s and outDate IS NULL ORDER BY inDate DESC"
    values = (citizenUsername,publicEstUsername)
    result = db.query(query,values)
    return result[0]

def registerExit(citizenUsername, publicEstUsername):
    lastEntry = getLastEntry(citizenUsername,publicEstUsername)
    query = "UPDATE Entries set outDate=NOW() where id=%s"
    values = (lastEntry[0],)
    result = db.crud(query,values)
    return result

def getOccupation(publicEstUsername):
    query = "SELECT actual,capacity from PublicEstablishment where username = %s"
    values = (publicEstUsername,)
    result = db.crud(query,values)
    return result


