
import VALUES from '../constant/values';
import { getUserByUsername } from '../client/user';
import CITIES_DATA from '../constant/json/cities';

class Validation {

    public valid: boolean = true;
    public errors: string[] = [];

    public validate(): boolean {
        return this.valid;
    }

    public getErrors(): string[] {
        return this.errors;
    }

}

export class UserValidation extends Validation {

    constructor(username: string, password: string, city: string, neighborhood: string) {
        super();
        this.usernameLength(username);
        this.usernameExists(username);
        this.passwordLength(password);
        this.cityListed(city);
        this.neighborhoodCharacters(neighborhood);
        this.neighborhoodLenght(neighborhood);
    }

    protected usernameLength(username: string): void {
        const condition: boolean = (username.length <= VALUES.VALIDATION.VALIDATION_VALUES.USER.USERNAME.MAX_LENGTH) && 
        (username.length >= VALUES.VALIDATION.VALIDATION_VALUES.USER.USERNAME.MIN_LENGTH);
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.USER.USERNAME.LENGTH);
    }

    protected usernameExists(username: string): void {
        getUserByUsername(username).then(response => {
            const condition: boolean = response == null;
            this.valid = this.valid && condition;
            if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.USER.USERNAME.EXISTS);
        })
    }

    protected passwordLength(password: string): void {
        const condition: boolean = (password.length <= VALUES.VALIDATION.VALIDATION_VALUES.USER.PASSWORD.MAX_LENGTH) && 
        (password.length >= VALUES.VALIDATION.VALIDATION_VALUES.USER.PASSWORD.MIN_LENGTH);
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.USER.PASSWORD.LENGTH);
    }

    protected cityListed(city: string): void {
        const condition: boolean = CITIES_DATA.filter(data => {
            return data.MUNICIPIO == city;
        }).length >= 1;
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.USER.CITY.LISTED);
    }

    protected neighborhoodLenght(neighborhood: string): void {
        const condition: boolean = (neighborhood.length <= VALUES.VALIDATION.VALIDATION_VALUES.USER.NEIGHBORHOOD.MAX_LENGTH) && 
        (neighborhood.length >= VALUES.VALIDATION.VALIDATION_VALUES.USER.NEIGHBORHOOD.MIN_LENGTH);
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.USER.NEIGHBORHOOD.LENGTH);
    }

    protected neighborhoodCharacters(neighborhood: string): void {
        const condition: boolean = neighborhood.match("^[A-Za-z0-9 ]+$").length >= 1;
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.USER.NEIGHBORHOOD.CHARACTERS);
    }

}

export class CitizenValidation extends UserValidation {

    constructor(username: string, password: string, city: string, neighborhood: string,
                names: string, lastname: string, age: string, people: string, occupation: string) {
        super(username, password, city, neighborhood);
        this.namesLength(names);
        this.namesCharacters(names);
        this.lastnameLength(lastname);
        this.lastnameCharacters(lastname);
        this.ageType(age);
        this.ageRange(age);
        this.peopleLivingType(people);
        this.peopleLivingRange(people);
        this.occupationOptions(occupation);
    }

    protected namesLength(names: string): void {
        const condition: boolean = (names.length <= VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.NAMES.MAX_LENGTH) && 
        (names.length >= VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.NAMES.MIN_LENGTH);
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.CITIZEN.NAMES.LENGTH);
    }

    protected namesCharacters(names: string): void {
        const condition: boolean = names.match("^[A-Za-z ]+$").length >= 1;
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.CITIZEN.NAMES.CHARACTERS);
    }

    protected lastnameLength(lastname: string): void {
        const condition: boolean = (lastname.length <= VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.LASTNAME.MAX_LENGTH) && 
        (lastname.length >= VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.LASTNAME.MIN_LENGTH);
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.CITIZEN.LASTNAME.LENGTH);
    }

    protected lastnameCharacters(lastname: string): void {
        const condition: boolean = lastname.match("^[A-Za-z ]+$").length >= 1;
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.CITIZEN.LASTNAME.CHARACTERS);
    }

    protected ageType(age: string): void {
        const condition: boolean = age.match("^[0-9]+$").length >= 1;
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.CITIZEN.AGE.TYPE);
    }

    protected ageRange(age: string): void {
        const condition: boolean = (parseInt(age) <= VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.AGE.MAX) && 
        (parseInt(age) >= VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.AGE.MIN);
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.CITIZEN.AGE.RANGE);
    }

    protected peopleLivingType(people: string): void {
        const condition: boolean = people.match("^[0-9]+$").length >= 1;
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.CITIZEN.PEOPLE_LIVING.TYPE);
    }

    protected peopleLivingRange(people: string): void {
        const condition: boolean = (parseInt(people) <= VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.PEOPLE_LIVING.MAX) && 
        (parseInt(people) >= VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.PEOPLE_LIVING.MIN);
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.CITIZEN.PEOPLE_LIVING.RANGE);
    }

    protected occupationOptions(occupation: string): void {
        const condition: boolean = VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.OCCUPATION.VALUES.filter(value => {
            return occupation == value.KEY;
        }).length >= 1;
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.CITIZEN.OCCUPATION.OPTION);
    }

}

export class PublicEstablishmentValidation extends UserValidation {

    constructor(username: string, password: string, city: string, neighborhood: string,
        name: string, category: string, capacity: string) {
        super(username, password, city, neighborhood);
        this.nameLength(name);
        this.categoryListed(category);
        this.capacityType(capacity);
        this.capacityRange(capacity);
    }

    protected nameLength(name: string): void {
        const condition: boolean = (name.length <= VALUES.VALIDATION.VALIDATION_VALUES.PUBLIC_ESTABLISHMENT.NAME.MAX_LENGTH) && 
        (name.length >= VALUES.VALIDATION.VALIDATION_VALUES.PUBLIC_ESTABLISHMENT.NAME.MIN_LENGTH);
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.PUBLIC_ESTABLISHMENT.NAME.LENGTH);
    }

    protected categoryListed(category: string): void {
        /* adecuate with categories endpoint client */
        const condition: boolean = CITIES_DATA.filter(data => {
            return data.MUNICIPIO == category;
        }).length >= 1;
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.PUBLIC_ESTABLISHMENT.CATEGORY.LISTED);
    }

    protected capacityType(capacity: string): void {
        const condition: boolean = capacity.match("^[0-9]+$").length >= 1;
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.PUBLIC_ESTABLISHMENT.CAPACITY.TYPE);
    }

    protected capacityRange(capacity: string): void {
        const condition: boolean = parseInt(capacity) >= VALUES.VALIDATION.VALIDATION_VALUES.PUBLIC_ESTABLISHMENT.CAPACITY.MIN;
        this.valid = this.valid && condition;
        if (!condition) this.errors.push(VALUES.VALIDATION.VALIDATION_ERROR.PUBLIC_ESTABLISHMENT.CAPACITY.RANGE);
    }
}