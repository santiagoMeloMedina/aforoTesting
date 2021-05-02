
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

    protected usernameLength(username: string): void {
        const condition: boolean = (username.length <= VALUES.VALIDATION.VALIDATION_VALUES.USER.USERNAME.MAX_LENGTH) && 
        (username.length >= VALUES.VALIDATION.VALIDATION_VALUES.USER.USERNAME.MIN_LENGTH);
        this.valid = this.valid && condition;
    }

    protected usernameExists(username: string): void {
        getUserByUsername(username).then(response => {
            const condition: boolean = response == null;
            this.valid = this.valid && condition;
        })
    }

    protected passwordLength(password: string): void {
        const condition: boolean = (password.length <= VALUES.VALIDATION.VALIDATION_VALUES.USER.PASSWORD.MAX_LENGTH) && 
        (password.length >= VALUES.VALIDATION.VALIDATION_VALUES.USER.PASSWORD.MIN_LENGTH);
        this.valid = this.valid && condition;
    }

    protected cityListed(city: string) {
        const condition: boolean = CITIES_DATA.filter(data => {
            return data.MUNICIPIO == city;
        }).length >= 1;
        this.valid = this.valid && condition;
    }

    protected neighborhoodLenght(neighborhood: string) {
        const condition: boolean = (neighborhood.length <= VALUES.VALIDATION.VALIDATION_VALUES.USER.NEIGHBORHOOD.MAX_LENGTH) && 
        (neighborhood.length >= VALUES.VALIDATION.VALIDATION_VALUES.USER.NEIGHBORHOOD.MIN_LENGTH);
        this.valid = this.valid && condition;
    }

    protected neighborhoodCharacters(neighborhood: string) {
        const condition: boolean = neighborhood.match("^[A-Za-z0-9 ]+$").length >= 1;
        this.valid = this.valid && condition;
    }

}