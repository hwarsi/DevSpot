from flask import Flask, Blueprint, jsonify, session, request
from Utils.model import connectToDB
import traceback
import pymongo
from flask_cors import CORS, cross_origin




Wall = Blueprint('Walls', __name__, url_prefix='/Walls')

@Wall.route('/getComments', methods=['GET'])
def getComments():

    db = connectToDB()
    commentCollection = db.Comments

    try:
        commentData = list(commentCollection.find())
        print(commentData)
        for item in commentData:
            del item['_id']
        print(commentData)
        return jsonify(commentData)
    except Exception as e:
        print(e)
        print(traceback.format_exc())
        return jsonify('Did not work!')

@Wall.route('/saveComments', methods=['POST'])
@cross_origin()
def saveComments():
    header['Access-Control-Allow-Origin'] = '*'
    data = request.data     #{'comment':'Hey'}

    db = connectToDB()
    commentCollection = db.Comments
    commentCollection.insert_many(data)
    app.config['CORS_HEADERS'] = 'Content-Type'



    return jsonify('Saved Data!')


