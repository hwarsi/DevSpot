from flask import Flask, Blueprint, jsonify, session
import json, requests, traceback
import pymongo
from flask_cors import CORS, cross_origin


from Authentication.views import Auth
from WallViews.views import Wall

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
CORS(app)

app.register_blueprint(Auth)
app.register_blueprint(Wall)

app.secret_key = 'dsfdsfdsgfdgfdkjgrjk4k5j4k3j54'

if __name__ == "__main__":
    app.run(debug=True)


