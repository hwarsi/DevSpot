import traceback, json
from flask import Flask, Blueprint, jsonify, session, request
from flask_cors import CORS
import pymongo

from Utils.model import connectToDB

Wall = Blueprint('Walls', __name__, url_prefix='/Walls')
CORS(Wall)

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

@Wall.route('/savePost', methods=['POST'])
def savePost():
    db = connectToDB()
    data = request.get_json()

    print(data)
    commentCollection = db.Comments
    commentCollection.insert_one(data)

    return jsonify('Saved Data!')


@Wall.route('/saveComments', methods=['POST'])
def saveComments():
    db = connectToDB()
    data = request.get_json()
    change_item = data['change_item']
    searchTerm = data['searchTerm']

    print(change_item)
    print(searchTerm)
    print(data)

    newValues = {"$set": change_item}

    db.Comments.update_one(searchTerm, newValues)

    return jsonify('Success it worked')

