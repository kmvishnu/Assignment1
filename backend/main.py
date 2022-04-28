from itertools import count
from flask import Flask,request,jsonify
import requests
import os
import simplejson as json

app = Flask(__name__)

def load_data():
    with open('data/users.json') as f: 
        return json.load(f)

@app.route("/addUser", methods=['POST'])
def write():

    def write_json(new_data, filename='data/users.json'):
        with open(filename,'r+') as file:
            file_data = json.load(file)
            file_data["allUsers"].append(new_data)
            file.seek(0)
            json.dump(file_data, file, indent = 4)
    
    _json = request.json

    write_json(_json)
   
  
    return "Success"

@app.route("/viewUsers", methods=['GET'])
def viewUsers():
    
    json_data = load_data()
    return json_data	

@app.route('/loginPage',methods=['POST'])
def login_user():
    _json = request.json
    _username = _json["username"]
    _password = _json["password"]

    found=False

    json_data = load_data()
    
    for x in json_data["allUsers"]:
	    if x['username'] == _username and x['password'] == _password:
                found=True
                x['count']=x['count']+1
                json_data['count']=x['count']
                with open("data/users.json", 'w') as f:
                    json.dump(json_data, f, indent=4)
                
                return x['id']
    if found==False:
        resp= jsonify("Unauthorized")
        resp.status_code=401
        return resp
        

@app.route('/viewSingleUser/<id>',methods=['GET'])
def view_user(id):
    
    json_data = load_data()
    
    for x in json_data["allUsers"]:
	    if  x['id'] == id:                              
                return x                   
			
if __name__ == '__main__':
    app.run(port=5000, debug=True)