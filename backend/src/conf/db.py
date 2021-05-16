
import mysql.connector as mysql
import pymysql.cursors
import const.conn as CONN

# class DB:
#     def __init__(self):
#         self.db = mysql.connect(
#             host=CONN.DB_HOST,
#             port=CONN.DB_PORT,
#             user=CONN.DB_USER,
#             password=CONN.DB_PASS,
#             database=CONN.DB_NAME
#         )
#         self.cursor = self.db.cursor()

#     def query(self, query,values):
#         self.cursor.execute(query,values)
#         self.writeFile(query)
#         result = self.cursor.fetchall()
#         return result

#     def crud(self,query,values):
#         self.cursor.execute(query,values)
#         self.writeFile(query)
#         self.db.commit()
#         result = self.cursor.rowcount
#         return result

#     def close(self):
#         self.db.close()
    
#     def writeFile(self, query):
#         file = open("conf/queries_logs.txt", "a")
#         file.write(str(query) + "\n")
#         file.close()

class Database:
    def __init__(self):
        self.conn = None
        self.cursor = None
        self.__connect()
    
    def __connect(self):
        self.conn = pymysql.connect(
            host=CONN.DB_HOST,
            port=int(CONN.DB_PORT),
            user=CONN.DB_USER,
            password=CONN.DB_PASS,
            db=CONN.DB_NAME,
            cursorclass= pymysql.cursors.DictCursor
        )
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
        result = [list(row.values()) for row in self.cursor.fetchall()]
        return result

    def release(self):
        self.conn.close()
    
    def writeFile(self, query):
        file = open("conf/queries_logs.txt", "a")
        file.write(str(query) + "\n")
        file.close()


db = Database()