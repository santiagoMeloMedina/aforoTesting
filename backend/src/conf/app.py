
from conf.blueprint import applyBlueprints

def configure(app):
    ### App configuration is made here
    applyBlueprints(app)
    return None