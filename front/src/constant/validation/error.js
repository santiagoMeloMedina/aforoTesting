
import VALUES from './values';

export default {
    USER: {
        USERNAME: {
            LENGTH: `${VALUES.USER.USERNAME.NAME} debe tener entre ${VALUES.USER.USERNAME.MIN_LENGTH} y ${VALUES.USER.USERNAME.MAX_LENGTH} caracteres`,
            EXISTS: `${VALUES.USER.USERNAME.NAME} ya existe`
        },
        PASSWORD: {
            LENGTH: `${VALUES.USER.PASSWORD.NAME} debe tener entre ${VALUES.USER.PASSWORD.MIN_LENGTH} y ${VALUES.USER.PASSWORD.MAX_LENGTH} caracteres`
        },
        CITY: {
            LISTED: `${VALUES.USER.CITY.NAME} no esta listada en las opciones`
        },
        NEIGHBORHOOD: {
            LENGTH: `${VALUES.USER.NEIGHBORHOOD.NAME} debe tener entre ${VALUES.USER.NEIGHBORHOOD.MIN_LENGTH} y ${VALUES.USER.NEIGHBORHOOD.MAX_LENGTH} caracteres`,
            CHARACTERS: `${VALUES.USER.NEIGHBORHOOD.NAME} tiene caracteres no validos, deben ser letras, espacios y/o numeros`
        }
    },
    CITIZEN: {
        NAMES: {
            LENGTH: `${VALUES.CITIZEN.NAMES.NAME} debe tener entre ${VALUES.CITIZEN.NAMES.MIN_LENGTH} y ${VALUES.CITIZEN.NAMES.MAX_LENGTH} caracteres`,
            CHARACTERS: `${VALUES.CITIZEN.NAMES.NAME} tiene caracteres no validos, deben ser letras y/o espacios`
        },
        LASTNAME: {
            LENGTH: `${VALUES.CITIZEN.LASTNAME.NAME} debe tener entre ${VALUES.CITIZEN.LASTNAME.MIN_LENGTH} y ${VALUES.CITIZEN.LASTNAME.MAX_LENGTH} caracteres`,
            CHARACTERS: `${VALUES.CITIZEN.LASTNAME.NAME} tiene caracteres no validos, deben ser letras y/o espacios`
        },
        AGE: {
            TYPE: `${VALUES.CITIZEN.AGE.NAME} debe ser un entero`,
            RANGE: `${VALUES.CITIZEN.AGE.NAME} debe estar en un rango de ${VALUES.CITIZEN.AGE.MAX} y ${VALUES.CITIZEN.AGE.MIN}`
        },
        PEOPLE_LIVING: {
            TYPE: `${VALUES.CITIZEN.PEOPLE_LIVING.NAME} debe ser un entero`,
            RANGE: `${VALUES.CITIZEN.PEOPLE_LIVING.NAME} debe estar en un rango de ${VALUES.CITIZEN.PEOPLE_LIVING.MAX} y ${VALUES.CITIZEN.PEOPLE_LIVING.MIN}`
        },
        OCCUPATION: {
            OPTION: `${VALUES.CITIZEN.OCCUPATION.NAME} debe ser ${VALUES.CITIZEN.OCCUPATION.VALUES[0].NAME} o ${VALUES.CITIZEN.OCCUPATION.VALUES[1].NAME}`
        }
    },
    PUBLIC_ESTABLISHMENT: {
        NAME: {
            LENGTH: `${VALUES.PUBLIC_ESTABLISHMENT.NAME.NAME} debe tener entre ${VALUES.PUBLIC_ESTABLISHMENT.NAME.MIN_LENGTH} y ${VALUES.CITIZEN.NAMES.MAX_LENGTH} caracteres`
        },
        CATEGORY: {
            LISTED: `${VALUES.PUBLIC_ESTABLISHMENT.CATEGORY.NAME} no esta listada en las opciones`
        },
        CAPACITY: {
            TYPE: `${VALUES.PUBLIC_ESTABLISHMENT.CAPACITY.NAME} debe ser un entero`,
            RANGE: `${VALUES.PUBLIC_ESTABLISHMENT.CAPACITY.NAME} debe estar ser mayor o igual a ${VALUES.PUBLIC_ESTABLISHMENT.CAPACITY.MIN}`
        }
    }
}