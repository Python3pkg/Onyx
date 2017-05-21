# -*- coding: utf-8 -*-
"""
Onyx Project
http://onyxproject.fr
Software under licence Creative Commons 3.0 France
http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
You may not use this software for commercial purposes.
@author :: Cassim Khouani
"""

import datetime
from flask import current_app
from celery.signals import task_postrun

from onyx.extensions import celery, db

@celery.task(ignore_result=True)
def do_some_stuff():
    print('Test')
    current_app.logger.info("I have the application context")
    #you can now use the db object from extensions

@task_postrun.connect
def close_session(*args, **kwargs):
    from .extensions import db
    # Flask SQLAlchemy will automatically create new sessions for you from
    # a scoped session factory, given that we are maintaining the same app
    # context, this ensures tasks have a fresh session (e.g. session errors
    # won't propagate across tasks)
    db.session.remove()
