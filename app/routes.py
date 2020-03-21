#from app import app
from flask import request
from flask import Flask
import db

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    print(request.args.get('test'))
    db.open_connection()
    result = db.execute_db("SELECT * FROM departments")
    db.close_connection()

    return result[0][0]

if __name__ == "__main__":
    app.debug = True 
    app.run(host="0.0.0.0", port=80)