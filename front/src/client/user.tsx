
import { post } from '../util/client';
import CONST from '../constant';

export function authenticate(username: string, password: string): Promise<string> {
    const body: any = {
        "username": username,
        "password": password
    }
    return new Promise<string>((resolve, reject) => {
        post(CONST.ENDPOINT.USER.AUTHENTICATE.URL, body).then(result => {
            resolve(result["response"]);
        });
    });
}

export function create_account(username: string, password: string, neigh: string, city: string): Promise<string> {
    const body: any = {
        username,
        password,
        neigh,
        city
    }
    return new Promise<string>((resolve, reject) => {
        post(CONST.ENDPOINT.USER.CREATE_ACCOUNT.URL, body).then(result => {
            resolve(result["response"]);
        });
    });
}

export function getUserByUsername(username: string): Promise<string> {
    const body: any = {
        username
    }
    return new Promise<string>((resolve, reject) => {
        post(CONST.ENDPOINT.USER.GET_USERNAME.URL, body).then(result => {
            resolve(result["response"]);
        });
    });
}
