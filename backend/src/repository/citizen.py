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


def getRiskEntriesLevel(username):
    entries = list(getEntriesCitizen(username))
    categoryPE,result,checked = list(),0.0,set()
    for i in range(len(entries)):
        query = "SELECT Category.name from PublicEstablishment inner join Category on  (Category.id = PublicEstablishment.category)  where PublicEstablishment.username=%s"
        values = (entries[i][4],)
        currentResult = db.query(query,values)
        categoryPE.append(currentResult[0][0])
    #['restaurante','cine','hotel','casino','supermercado','centro comercial']
    for entry in categoryPE:
        if entry not in checked:
            if entry == "restaurante":
                result += 5.0
            elif entry == "cine":
                result += 3.0
            elif entry == "hotel":
                result += 7.0
            elif entry == "casino":
                result += 3.0
            # elif entry == "supermercado":
            #     result += 6.0
            # else: #entry == "centro comercial":
            #     result += 10.0      
            checked.add(entry)
    return result


def getRiskLevel(username):
    query = "SELECT age, occupation, housemates FROM Citizen where username=%s"
    values = (username,)
    result = db.query(query,values)
    age, occupation, housemates = result[0][0], result[0][1], result[0][2]
    #valuesAge = ("age",age)
    #valuesHousemates = ("housemates",housemates)
    #valuesOccupation = ("occupation",occupation)
    #result = db.query(query,valuesAge)[0][0] + db.query(query,valuesHousemates)[0][0] + db.query(query,valuesOccupation)[0][0]
    result = 0.0
    if(occupation == "home"):
        result += 3.0
    else:
        result += 7.0  
    if(age > 0):
        if( age <= 20):
            result += 3.0
        elif (age <= 30 ):
            result += 6.0
        elif (age <= 70):
            result += 10.0
        else:
            result += 12.0
    result += housemates*1.0
    return result
