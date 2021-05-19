
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

export function getEstablishmentHistory(username, start, quantity) : Promise<string>{
    const body = {
        username
    }
    return new Promise<string>((resolve, reject) => {
        let url = `${CONST.ENDPOINT.PUBLIC_ESTABLISHMENT.GET_ESTABLISHMENT_ENTRIES.URL}/${start}/${quantity}`;
        post(url, body).then(result => {
            resolve(result['response']);
        })

    })
}

export function registerEntry(citizenUsername, publicEstUsername, mask, temperature) : Promise<string>{
    const body = {
        citizenUsername,
        publicEstUsername,
        mask,
        temperature
    }
    return new Promise<string>((resolve, reject) => {
        post(CONST.ENDPOINT.PUBLIC_ESTABLISHMENT.REGISTER_ENTRY.URL, body).then(result => {
            resolve(result['response']);
        })

    })
}

export function registerExit(citizenUsername, publicEstUsername) : Promise<string>{
    const body = {
        citizenUsername,
        publicEstUsername,
    }
    return new Promise<string>((resolve, reject) => {
        post(CONST.ENDPOINT.PUBLIC_ESTABLISHMENT.REGISTER_EXIT.URL, body).then(result => {
            resolve(result['response']);
        })

    })
}