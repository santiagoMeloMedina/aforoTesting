
import mysql.connector as mysql
import const.conn as CONN

class DB:
    def __init__(self):
        self.db = mysql.connect(
            host=CONN.DB_HOST,
            port=CONN.DB_PORT,
            user=CONN.DB_USER,
            password=CONN.DB_PASS,
            database=CONN.DB_NAME
        )
        self.cursor = self.db.cursor()

    def query(self, query):
        return self.cursor.execute(query)

    def crud(self, query):
        self.cursor.execute(query)
        self.db.commit()

    def close():
        self.db.close()
    

db = DB()