from flask import Flask, Blueprint, jsonify, session

Auth = Blueprint('auth', __name__, url_prefix='/auth')



@Auth.route('/login', methods=['GET'])
def login():
    data = {'username':'bob', 'password':'peepee123'}
    session['token'] = 'jsdkfkj934ujeklfjdlndsflds'

    return jsonify(session['token'] )


@Auth.route('/verifyToken', methods=['GET'])
def verifyToken():
    loginData = session['creds']
    return jsonify('User Authenticated!')

