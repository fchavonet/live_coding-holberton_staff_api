from flask import Flask, render_template
from flask_restx import Api
from app.api.v1.staff import api as staff_namespace


def create_app():
    """
    Initialize and return the Flask app.
    """

    app = Flask(__name__)

    @app.route("/")
    def create_index():
        return render_template("index.html")

    api = Api(
        app,
        title="Holberton Staff API",
        version="1.0",
        description="API for managing Holberton School staff members.",
        doc="/api/",
    )

    api.add_namespace(staff_namespace, path="/api/v1/staff")

    return app
