from conf.db import db

from datetime import date, datetime, timedelta



def insertPublicEstablishment(username,name,category ,capacity):
    query = "INSERT INTO PublicEstablishment (username,name,category,capacity) values (%s,%s,%s,%s)"
    values = (username,name,category,capacity)
    result = db.crud(query,values)
    return result


def getPublicEstablishment(username):
    query = "SELECT username,name,category,capacity,actual values from PublicEstablishment where username=%s"
    values = (username,)
    result = db.query(query,values)
    return result

def updateName(username,newName):
    query = "UPDATE PublicEstablishment set name = %s where username = %s"
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


