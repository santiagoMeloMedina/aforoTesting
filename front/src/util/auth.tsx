
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

export default class Auth {

    // TODO(Santiago): change constant "token" for an actual constant

    static isAuthenticated() {
        const tokenCookie: string = Cookies.get("token");
        let data: any = null;
        try {
            data = jwt_decode(tokenCookie);
        } catch (error) {
        }
        const authed: boolean = data && data["user"] ? true : false;
        return authed;
    }

    static getToken() {
        const tokenCookie: string = Cookies.get("token");
        return tokenCookie ?? "";
    }

    static setTokenCookie(token: string) {
        Cookies.set("token", token);
    }

    static delTokenCookie() {
        Cookies.remove("token")
    }

}