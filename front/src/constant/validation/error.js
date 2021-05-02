
import VALUES from './values';

export default {
    USER: {
        USERNAME: {
            LENGTH: `Nombre de usuario debe tener entre ${VALUES.USER.USERNAME.MIN_LENGTH} y ${VALUES.USER.USERNAME.MAX_LENGTH} caracteres`,
            EXISTS: "Nombre de usuario ya existe"
        },
        PASSWORD: {
            LENGTH: `Contraseña debe tener entre ${VALUES.PASSWORD.USERNAME.MIN_LENGTH} y ${VALUES.PASSWORD.USERNAME.MAX_LENGTH} caracteres`
        },
        CITY: {
            LISTED: "Ciudad no esta listada en las opciones"
        },
        NEIGHBORHOOD: {
            LENGTH: `Contraseña debe tener entre ${VALUES.NEIGHBORHOOD.USERNAME.MIN_LENGTH} y ${VALUES.NEIGHBORHOOD.USERNAME.MAX_LENGTH} caracteres`,
            CARACTERES: "Contraseña tiene caracteres no validos, deben ser letras y numeros"
        }
    }
}