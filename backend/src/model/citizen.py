
class Citizen:
    def __init__(self, username=None, names=None, lastnames=None, age=None, occupation=None, housemates=None, **kwargs):
        self.username = username
        self.names = names
        self.lastnames = lastnames
        self.age = age
        self.occupation = occupation
        self.housemates  = housemates
    
    def setArr(self, values):
        self.username = values[0]
        self.names = values[1]
        self.lastnames = values[2]
        self.age = values[3]
        self.occupation = values[4]
        self.housemates = values[5]
        return self
    
    def getUsername(self):
        return self.username
    
    def getName(self):
        return self.names
    
    def getLastnames(self):
        return self.lastnames
    
    def getAge(self):
        return self.age
    
    def getOccupation(self):
        return self.occupation
    
    def getHousemates(self):
        return self.housemates
    
    def toMap(self):
        return {
            "username": self.username,
            "names": self.names,
            "lastnames": self.lastnames,
            "age": self.age,
            "occupation": self.occupation,
            "housemates": self.housemates
        }