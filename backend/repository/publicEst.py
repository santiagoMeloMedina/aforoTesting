from conf.db import db

from datetime import date, datetime, timedelta



def insertPublicEstablishment(username,name,category ,capacity):
    query = "INSERT INTO PUBLICESTABLISHMENT (username,name,category,capacity) values (%s,%s,%s,%s)"
    values = (username,name,category,capacity)
    result = db.crud(query,values)
    return result


def getPublicEstablishment(username):
    query = "SELECT username,name,category,capacity,actual values from publicEstablishment where username=%s"
    values = (username,)
    result = db.query(query,values)
    return result

def updateName(username,newName):
    query = "UPDATE publicEstablishment set name = %s where username = %s"
    values = (newName,username)
    result = db.crud(query,values)
    return result

def registerEntry(citizenUsername, publicEstUsername, temperature,mask):
    query = "INSERT INTO ENTRIES (citizenUsername,publicEstUsername,temperature,mask) values (%s,%s,%s,%s)"
    values = (citizenUsername,publicEstUsername,temperature,mask)
    result = db.crud(query,values)
    return result 
    #timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

def getEntriesPublicEstablishment(username):
    query = "SELECT id,inDate,outDate,citizenUsername,publicEstUsername,temperature,mask from Entries where publicEstUsername=%s"
    values = (username,)
    result = db.query(query,values)
    return result


