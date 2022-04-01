from json import JSONEncoder
from urllib import response
from flask import Flask, render_template, jsonify, request
import psycopg2
import os
from flask_cors import CORS, cross_origin
app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


def get_db_connection():
    conn = psycopg2.connect(
            host="localhost",
            database="dosnoventa",
            user="postgres",
            password="Mopipopi315")
    return conn



@app.route("/bikes",  methods=['GET'])
@cross_origin()
def bikes():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute(f'SELECT * FROM bikes')
    response = cur.fetchall()
    bikes = []
    for bike in response:
        bike_object = {}
        bike_object['id'] = bike[0]
        bike_object['img'] = bike[1]
        bike_object['name'] = bike[2]
        bike_object['price'] = bike[3]
        bikes.append(bike_object)
    cur.close()
    conn.close()
    json_bikes = jsonify(*bikes)
    return json_bikes

@app.route("/createBike",  methods=['GET', 'POST'])
@cross_origin()
def create_bike():
    conn = get_db_connection()
    cur = conn.cursor()
    response = request.json
    image = response["data_image"]
    name = response["data_name"]
    price = response["data_price"]
    cur.execute("INSERT INTO bikes (img, name, price) VALUES (%(image)s, %(name)s, %(price)s)", {'image': image, 'name': name, 'price': price})
    conn.commit()
    cur.close()
    conn.close()
    return "bike created"

@app.route("/deleteBike",  methods=['GET', 'POST'])
@cross_origin()
def delete_bike():
    conn = get_db_connection()
    cur = conn.cursor()
    response = request.json
    name = response["data"]
    cur.execute("DELETE FROM bikes WHERE name=%(name)s", {'name': name})
    conn.commit()
    cur.close()
    conn.close()
    return "bike deleted"


# import routes