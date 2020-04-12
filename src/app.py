from flask import Flask
import json, requests, traceback
import pymongo

DevSpot_app = Flask(__name__)

@DevSpot_app.route('/', methods=['GET'])
def GetComments():
    db = connectToDB()
    get_comments = db.comments
    return render_template()



if __name__ == "__main__":
    DevSpot_app.run(debug=True)