# This will be where the initialization of the flask app will occur

import os
from flask import Flask

from .extensions import mongo
from .config import DevelopmentConfig

# application factory
def create_app():
    app = Flask(__name__)
    app.config.from_object(DevelopmentConfig)

    # db setup
    mongo.init_app(app)

    # blueprint configurations
    from .views import index
    app.register_blueprint(index.bp)

    return app
