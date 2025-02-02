"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

# api.config["JWT_SECRET_KEY"] = "txamanguillo"  
# jwt = JWTManager(api)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200



@api.route("signup", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()
    
    if user is None:
        new_user = User(email=email, password=password, is_active=True)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg": "usuario creado"}), 200
    return jsonify({"msg": "el usuario ya existe"}), 400
    


@api.route("login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email, password=password).first()
    if not user:
        return jsonify({"msg": "usuario o email incorrectos"})
    access_token = create_access_token(identity=user.email)
    return jsonify({"token": access_token})


@api.route("private", methods=["GET"])
@jwt_required()
def private():
    user_email = get_jwt_identity()
    user = User.query.filter_by(email = user_email).first()
    if not user:
        return jsonify({"msg": "usuario no encontrado"}), 400
    return jsonify({"msg": "usuario encontrado"}), 200
    
