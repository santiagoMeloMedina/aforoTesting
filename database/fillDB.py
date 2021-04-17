# from conf.db import db
import random
import csv
from datetime import date, datetime, timedelta
import mysql.connector as mysql

import os

env = os.environ

DB_HOST = env.get("DB_HOST") if env.get("DB_HOST") else "0.0.0.0"
DB_PORT = env.get("DB_PORT") if env.get("DB_PORT") else "4000"
DB_PASS = env.get("DB_PASS") if env.get("DB_PASS") else "123" 
DB_USER = env.get("DB_USER") if env.get("DB_USER") else "root"
DB_NAME = env.get("DB_NAME") if env.get("DB_NAME") else "aforo"

my_db = mysql.connect(
            host=DB_HOST,
            port=DB_PORT,
            user=DB_USER,
            password=DB_PASS,
            database=DB_NAME
        )

my_cursor = my_db.cursor()

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
        ans.append((tpe,str(age+1),str(percent*2)))
        percent += 0.1
        percent = round(percent,2)
    return ans


def fillHousematesRisk():
    tpe,housemates,percent,ans = "housemates",0,1.0,list()
    for housemates in range(11):#maximo 10 acompañantes
        ans.append((tpe,str(housemates),str(percent)))
        percent += 1.0
    return ans

def fillOcupationRisk():
    return [("occupation","home","3.0"),("occupation","not home","10.0")]

def deleteParameters():
    query = "delete from Parameters"
    my_cursor.execute(query)
    my_db.commit()

def fillParameters():
    query = "INSERT INTO Parameters (tpe,val,percent) values (%s,%s,%s)"
    values = list()
    values = fillAgeRisk()+fillHousematesRisk()+fillOcupationRisk()
    for tpe,val,percent in values:
        my_cursor.execute(query,(tpe,val,percent))
        my_db.commit()
    return values

def fillCategories():
    query = "INSERT INTO Category (name) values (%s)"
    categories = ['restaurante','cine','hotel','casino','supermercado','centro comercial']
    for category in categories:
       my_cursor.execute(query,(category,))
       my_db.commit()

fillCategories()
fillParameters()
# deleteParameters()