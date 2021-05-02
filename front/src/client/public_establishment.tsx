
import { post, get } from '../util/client';
import CONST from '../constant';

export function create_account(username: string, password: string, neighborhood: string, city: string, 
    names: string, lastnames: string, age: string, occupation: string, housemates: string): Promise<string> {
    const body: any = {
        username,
        password,
        neighborhood,
        city
    }
    return new Promise<string>((resolve, reject) => {
        post(CONST.ENDPOINT.USER.CREATE_ACCOUNT.URL, body).then(result => {
            resolve(result["response"]);
        });
    });
}

export function getCategories(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        get(CONST.ENDPOINT.PUBLIC_ESTABLISHMENT.GET_CATEGORIES.URL).then(result => {
            console.log(result)
            resolve(result["response"]);
        });
    });
}