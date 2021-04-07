
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