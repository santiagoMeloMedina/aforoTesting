
class Category:
    def __init__(self, id=None, name=None, **kwargs):
        self.id = id
        self.name = name
    
    def setArr(self, values):
        self.id = values[0]
        self.name = values[1]
        return self

    def getId(self):
        return self.id
    
    def getName(self):
        return self.name

    def toMap(self):
        return {
            "id": self.id,
            "name": self.name
        }