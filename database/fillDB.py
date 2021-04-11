#from conf.db import db
import random
import csv
from datetime import date, datetime, timedelta


def initializeCities():
    ans = set()
    with open("dataset.csv",encoding="utf8") as file:
        reader,i = csv.reader(file),0
        for row in reader:
            if i > 0:
                ans.add(row[4])
            i += 1
    ans = list(ans)
    ans.sort()
    return ans
print(initializeCities())
def fillAgeRisk():
    tpe,age,percent,ans = "age",0,0.1,list()
    for age in range(100):
        ans.append((tpe,str(age+1),str(percent)))
        percent += 0.1
        percent = round(percent,2)
    return ans


def fillHousematesRisk():
    tpe,housemates,percent,ans = "housemates",0,1.0,list()
    for housemates in range(10):#maximo 10 acompañantes
        ans.append((tpe,str(housemates+1),str(percent)))
        percent += 1.0
    return ans

def fillOcupationRisk():
    return [("occupation","home","3.0"),("occupation","not home","7.0")]

def fillParameters():
    query = "INSERT INTO Parameters (tpe,val,percent) values (%s,%s,%s)"
    values = list()
    values = fillAgeRisk()+fillHousematesRisk()+fillOcupationRisk()
    #for tpe,val,percent in values:
    #    db.crud(query,(tpe,val.percent))
    return values

def fillCategories():
    query = "INSERT INTO Category (name) values (%s)"
    categories = ['restaurante','cine','hotel','casino','supermercado','centro comercial']
    #for category in categories:
    #    db.crud(query,(category,))

    


print(fillParameters())