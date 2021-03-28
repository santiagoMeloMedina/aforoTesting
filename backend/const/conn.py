
import os

env = os.environ

DB_HOST = env.get("DB_HOST")
DB_PORT = env.get("DB_PORT")
DB_PASS = env.get("DB_PASS")
DB_USER = env.get("DB_USER") if env.get("DB_USER") else "root"
DB_NAME = env.get("DB_NAME")