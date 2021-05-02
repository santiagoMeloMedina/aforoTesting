
export default {
    USER: {
        AUTHENTICATE: {
            URL: "user/auth",
            method: "POST"
        },
        CREATE_ACCOUNT: {
            URL: "user/add",
            method: "POST"
        },
        GET_USERNAME: {
            URL: "user/get",
            method: "POST"
        }
    },
    PUBLIC_ESTABLISHMENT: {
        GET_CATEGORIES: {
            URL: "publicEstablishment/get/categories",
            method: "GET"
        }
    }
}