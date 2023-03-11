from flask import Flask, request
from flask_cors import CORS
import students
import classes
import term

app = Flask(__name__)
CORS(app)
app.register_blueprint(students.bp)
app.register_blueprint(classes.bp)
app.register_blueprint(term.bp)

@app.route('/')
def index():
    return "/classes will have API information"

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)