
import { post, get } from '../util/client';
import CONST from '../constant';

export function create_account(username: string, password: string, neighborhood: string, city: string, 
    name: string, category: string, capacity: string): Promise<string> {
    const body: any = {
        username, 
        password, 
        neighborhood, 
        city, 
        name,
        category,
        capacity
    }
    return new Promise<string>((resolve, reject) => {
        post(CONST.ENDPOINT.PUBLIC_ESTABLISHMENT.CREATE_ACCOUNT.URL, body).then(result => {
            resolve(result["response"]);
        });
    });
}

export function getCategories(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
        get(CONST.ENDPOINT.PUBLIC_ESTABLISHMENT.GET_CATEGORIES.URL).then(result => {
            resolve(result["response"]);
        });
    });
}

export function getEstablishmentHistory(username) : Promise<string>{
    const body = {
        username
    }
    return new Promise<string>((resolve, reject) => {
        post(CONST.ENDPOINT.PUBLIC_ESTABLISHMENT.GET_ESTABLISHMENT_ENTRIES.URL, body).then(result => {
            resolve(result['response']);
        })

    })
}