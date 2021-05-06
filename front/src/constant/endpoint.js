
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
        CREATE_ACCOUNT: {
            URL: "publicEstablishment/add",
            method: "POST"
        },
        GET_CATEGORIES: {
            URL: "publicEstablishment/get/categories",
            method: "GET"
        }
    },
    CITIZEN: {
        CREATE_ACCOUNT: {
            URL: "citizen/add",
            method: "POST"
        },
        GET_RISK: {
            URL: "citizen/get-risk",
            method: "POST"
        }
    }
}