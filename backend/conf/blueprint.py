
from controller.user import app as UserApp
from controller.citizen import app as CitizenApp
from controller.publicEstablishment import app as PublicEstablishmentApp

blueprints = [UserApp, CitizenApp, PublicEstablishmentApp]

def applyBlueprints(app):
    for blueprint in blueprints:
        app.register_blueprint(blueprint)
    return
