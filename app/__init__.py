from flask import Flask, render_template


def create_app():
    """
    Initialize and return the Flask app.
    """

    app = Flask(__name__)

    @app.route("/")
    def create_index():
        return render_template("index.html")

    return app
