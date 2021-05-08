
import { post } from '../util/client';
import CONST from '../constant';

export function create_account(username: string, password: string, neighborhood: string, city: string, 
    names: string, lastnames: string, age: string, occupation: string, housemates: string): Promise<string> {
    const body: any = {
        username,
        password,
        neighborhood,
        city, 
        names, 
        lastnames, 
        age, 
        occupation, 
        housemates
    }
    return new Promise<string>((resolve, reject) => {
        post(CONST.ENDPOINT.CITIZEN.CREATE_ACCOUNT.URL, body).then(result => {
            resolve(result["response"]);
        });
    });
}

export function getRisk(username):  Promise<string>{
    const body = {
        username
    }
    return new Promise<string>((resolve, reject) => {
        post(CONST.ENDPOINT.CITIZEN.GET_RISK.URL, body).then(result => {
            resolve(result["response"]);
        });
    });
}

export function getCitizenHistory(username) : Promise<string>{
    const body = {
        username
    }
    return new Promise<string>((resolve, reject) => {
        post(CONST.ENDPOINT.CITIZEN.GET_CITIZEN_ENTRIES.URL, body).then(result => {
            resolve(result['response']);
        })

    })
}

export function getEntriesRiskLevel(username) : Promise<string>{
    const body = {
        username
    }
    return new Promise<string>((resolve, reject) => {
        post(CONST.ENDPOINT.CITIZEN.GET_RISK_ENTRIES.URL, body).then(result => {
            resolve(result['response']);
        })

    })
}