
from flask import Flask, jsonify
from conf.app import configure
from flask_cors import CORS, cross_origin #get rid of this

app = Flask(__name__)
cors = CORS(app) #get rid of this
configure(app)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"response": "Hello there"})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=4001)