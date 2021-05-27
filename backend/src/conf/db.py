
import pymysql
from dbutils.pooled_db import PooledDB
import const.conn as CONN

class Database:
    def __init__(self):
        self.conn = None
        self.cursor = None
        self.__connect()
    
    def __connect(self):
        pool = PooledDB(
            pymysql, 10, 
            host=CONN.DB_HOST, 
            user=CONN.DB_USER,
            passwd=CONN.DB_PASS, 
            db=CONN.DB_NAME, 
            port=int(CONN.DB_PORT), 
            charset="utf8"
        )
        self.conn = pool.connection()
        self.cursor = self.conn.cursor()
        return

    def crud(self, sentence, values):
        try:
            self.cursor.execute(sentence, values)
            self.writeFile(sentence)
            self.conn.commit()
            result = self.cursor.rowcount
            return result
        except Exception as e:
            try:
                self.__connect()
                self.cursor.execute(sentence, values)
                self.writeFile(sentence)
                self.conn.commit()
                result = self.cursor.rowcount
                return result
            except Exception as e:
                print(e)

    def query(self, sentence, values):
        self.cursor.execute(sentence, values)
        self.writeFile(sentence)
        result = [list(row) for row in self.cursor.fetchall()]
        return result

    def release(self):
        self.conn.close()
    
    def writeFile(self, query):
        file = open("conf/queries_logs.txt", "a")
        file.write(str(query) + "\n")
        file.close()


db = Database()