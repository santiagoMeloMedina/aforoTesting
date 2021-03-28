
from controller.user import app as UserApp

blueprints = [UserApp]

def applyBlueprints(app):
    for blueprint in blueprints:
        app.register_blueprint(blueprint)
    return
