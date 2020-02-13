import os 
from dotenv import load_dotenv

load_dotenv(verbose=True)

load_dotenv("../.env")

usr = os.environ.get("DB_USR")
passwd = os.environ.get("DB_PASSWD")
host = os.environ.get("DB_IP")
port = os.environ.get("DB_PORT")
database = os.environ.get("DB_NAME")