
from flask import Flask, jsonify
from conf.app import configure

app = Flask(__name__)
configure(app)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"response": "Hello there"})


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=4001)