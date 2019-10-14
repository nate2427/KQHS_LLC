from flask import (
    Blueprint, flash, redirect, render_template, request, session, url_for, jsonify, current_app as app
)

from ..extensions import mongo

bp = Blueprint('index', __name__)

@bp.route('/')
def index():
    return render_template("index.html")