
import os

env = os.environ

DB_HOST = env.get("DB_HOST") if env.get("DB_HOST") else "0.0.0.0"
DB_PORT = env.get("DB_PORT") if env.get("DB_PORT") else "4000"
DB_PASS = env.get("DB_PASS") if env.get("DB_PASS") else "123" 
DB_USER = env.get("DB_USER") if env.get("DB_USER") else "root"
DB_NAME = env.get("DB_NAME") if env.get("DB_NAME") else "aforo"