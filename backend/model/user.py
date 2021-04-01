
class User:
    def __init__(self, username=None, city=None, neighborhood=None, **kwargs):
        self.username = username
        self.city = city
        self.neighborhood = neighborhood
    
    def setArr(self, values):
        self.username = values[0]
        self.city = values[2]
        self.neighborhood = values[3]
        return self

    def getUsername(self):
        return self.username
    
    def getCity(self):
        return self.city
    
    def getNeighborhood(self):
        return self.neighborhood

    def toMap(self):
        return {
            "username": self.username,
            "city": self.city,
            "neighborhood": self.neighborhood
        }