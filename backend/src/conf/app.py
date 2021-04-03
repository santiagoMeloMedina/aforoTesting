
from conf.db import DB
from conf.blueprint import applyBlueprints

def configure(app):
    ### App configuration is made here
    applyBlueprints(app)
    return None