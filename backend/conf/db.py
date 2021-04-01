
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

    def query(self, query,values):
        self.cursor.execute(query,values)
        return self.cursor.fetchall()

    def crud(self,query,values):
        self.cursor.execute(query,values)
        self.db.commit()
        return self.cursor.rowcount

    def close(self):
        self.db.close()
    

db = DB()