class PublicEstablishment:
    def __init__(self, username=None, name=None,category=None,capacity=None,actual=None,**kwargs):
        self.username = username
        self.name = name
        self.category = category
        self.capacity = capacity
        self.actual = actual

    def setArr(self,values):
        self.username = values[0]
        self.name = values[1]
        self.category = values[2]
        self.capacity = values[3]
        self.actual = values[4]
        return self

    def getUsername(self):
        return self.username
    
    def getName(self):
        return self.name
    def getCategory(self):
        return self.category
    
    def getCapacity(self):
        return self.capacity
    
    def getActual(self):
        return self.actual
    
    def toMap(self):
        return {
            'username':self.username,
            'name':self.name,
            'category':self.category,
            'capacity':self.capacity,
            'actual':self.actual
        }
