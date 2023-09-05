from flask import jsonify
from app import app, db
from app.models import TimeCapsule

@app.route('/')
def home():
    return "Welcome to Time Trove API!"

@app.route('/capsules', methods=['GET'])
def get_capsules():
    capsules = TimeCapsule.query.all()
    return jsonify([{"message": capsule.message} for capsule in capsules])
