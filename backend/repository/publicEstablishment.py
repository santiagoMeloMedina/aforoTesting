
from conf.db import db
from datetime import date, datetime, timedelta
from model.publicEstablishment import PublicEstablishment


def insertPublicEstablishment(username,name,category ,capacity):
    query = "INSERT INTO PublicEstablishment (username,name,category,capacity) values (%s,%s,%s,%s)"
    values = (username,name,category,capacity)
    result = db.crud(query,values)
    return result


def getPublicEstablishment(username):
    query = "SELECT * from PublicEstablishment where username=%s"
    values = (username,)
    result = db.query(query,values)
    return result

def update(publicEst):
    mapped = publicEst.toMap()
    fields = ["name", "category", "capacity", "actual"]
    subquery = ' '.join([f"set {field} = %s" if mapped[field] is not None else "" for field in fields])
    query = f"UPDATE PublicEstablishment {subquery} where username = %s"
    print(query)
    values = (newName,username)
    result = db.crud(query,values)
    return result

def getLastEntry(citizenUsername, publicEstUsername):
    query = "SELECT * FROM Entries where citizenUsername = %s and publicEstUsername = %s and outDate IS NULL"
    values = (citizenUsername,publicEstUsername)
    result = db.query(query,values)
    return result

def registerEntry(citizenUsername, publicEstUsername, temperature,mask):
    query = "INSERT INTO Entries (citizenUsername,publicEstUsername,temperature,mask) values (%s,%s,%s,%s)"
    values = (citizenUsername,publicEstUsername,temperature,mask)
    result = db.crud(query,values)
    return result 
    #timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')



def registerExit(citizenUsername, publicEstUsername,_date): #revisar
    lastEntry = getLastEntry(citizenUsername,publicEstUsername)
    query = "UPDATE Entries set outDate=%s where id=%s"
    values = (_date,lastEntry[0])#date,id
    result = db.crud(query,values)
    return result

def getEntriesPublicEstablishment(username):
    query = "SELECT id,inDate,outDate,citizenUsername,publicEstUsername,temperature,mask from Entries where publicEstUsername=%s"
    values = (username,)
    result = db.query(query,values)
    return result


