
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

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

    static isSpecifiedRole(role: string) {
        let result: boolean = false;
        const data: any = jwt_decode(this.getToken());
        if (data["role"]) {
            result = data["role"] == role;
        }
        return result;
    }

    static setTokenCookie(token: string) {
        Cookies.set("token", token);
    }

    static delTokenCookie() {
        Cookies.remove("token")
    }

    static getUsername(){
        const decodedToken = jwtDecode(Auth.getToken());
        return decodedToken['user']
    }

}