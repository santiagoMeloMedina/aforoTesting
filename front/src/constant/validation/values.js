
export default {
    USER: {
        USERNAME: {
            NAME: "Nombre de usuario",
            MAX_LENGTH: 30,
            MIN_LENGTH: 1
        },
        PASSWORD: {
            NAME: "Contraseña",
            MAX_LENGTH: 20,
            MIN_LENGTH: 1
        },
        CITY: {
            NAME: "Ciudad"
        },
        NEIGHBORHOOD: {
            NAME: "Barrio",
            MAX_LENGTH: 50,
            MIN_LENGTH: 1
        }
    },
    CITIZEN: {
        NAMES: {
            NAME: "Nombres",
            MAX_LENGTH: 50,
            MIN_LENGTH: 1
        },
        LASTNAME: {
            NAME: "Apellidos",
            MAX_LENGTH: 50,
            MIN_LENGTH: 1
        },
        AGE: {
            NAME: "Edad",
            MAX: 100,
            MIN: 1
        },
        PEOPLE_LIVING: {
            NAME: "Numero de personas con las que convive",
            MAX: 10,
            MIN: 0
        },
        OCCUPATION: {
            NAME: "Ocupacion",
            VALUES: [
                {
                    NAME: "Remoto",
                    KEY: "home"
                },
                {
                    NAME: "Presencial",
                    KEY: "not_home"
                }
            ]
        }
    },
    PUBLIC_ESTABLISHMENT: {
        NAME: {
            NAME: "Nombre",
            MAX_LENGTH: 49,
            MIN_LENGTH: 1
        },
        CATEGORY: {
            NAME: "Categoria"
        },
        CAPACITY: {
            NAME: "Capacidad",
            ALIAS: "Capacidad maxima de personas",
            MIN: 1
        },
        TEMPERATURE:{
            NAME: "Temperatura"
        },
        MASK: {
            NAME: "Tapabocas",
            VALUES: [
                {
                    NAME: "Si",
                    KEY: 1
                },
                {
                    NAME: "No",
                    KEY: 0
                }
            ]
        }
    }
}