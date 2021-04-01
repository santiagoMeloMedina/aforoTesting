
from controller.user import app as UserApp
from controller.citizen import app as CitizenApp

blueprints = [UserApp, CitizenApp]

def applyBlueprints(app):
    for blueprint in blueprints:
        app.register_blueprint(blueprint)
    return
