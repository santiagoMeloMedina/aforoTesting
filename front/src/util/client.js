
import Auth from '../util/auth';

function completeUrl(url, params={}) {
    // TODO(Santiago): Change this to not sue the burned host
    let newUrl = `http://localhost:4001/${url}${params.length ? '?' : ''}`;
    Object.entries(params).forEach((value, key) => {
        newUrl = `${newUrl}&${key}=${value}`;
    });
    return newUrl;
}

export function post(url, body, headers={}, params={}) {
    return new Promise((resolve, reject) => {
        fetch(completeUrl(url, params), {
            method: "POST",
            headers: {
                "Authorization": Auth.getToken(),
                "Content-Type": "application/json",
                ...headers
            },
            body: JSON.stringify(body)
        }).then(response => response.json()).then(data => {
            resolve(data)
        })
    })
}
// Arreglar todos los demas!!!
export function get(url, headers={}, params={}) {
    return new Promise((resolve, reject) => {
        fetch({
            url: completeUrl(url, params),
            method: "GET",
            headers: {
                Authorization: Auth.getToken(),
                ...headers
            }
        })
    })
}

export function put(url, body, headers={}, params={}) {
    return new Promise((resolve, reject) => {
        fetch({
            url: completeUrl(url, params),
            method: "PUT",
            headers: {
                Authorization: Auth.getToken(),
                ...headers
            },
            body: body
        })
    })
}

export function del(url, body, headers={}, params={}) {
    return new Promise((resolve, reject) => {
        fetch({
            url: completeUrl(url, params),
            method: "DELETE",
            headers: {
                Authorization: Auth.getToken(),
                ...headers
            },
            body: body
        })
    })
}