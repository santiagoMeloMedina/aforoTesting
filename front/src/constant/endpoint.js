
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
        },
        GET_ESTABLISHMENT_ENTRIES: {
            URL: "publicEstablishment/entries",
            method: "POST"
        },
        REGISTER_ENTRY: {
            URL: 'publicEstablishment/register-entry',
            method: 'POST'
        },
        REGISTER_EXIT: {
            URL: 'publicEstablishment/register-exit',
            method: 'POST'
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
        },
        GET_CITIZEN_ENTRIES: {
            URL: "citizen/entries-citizen",
            method: "POST"
        },
        GET_RISK_ENTRIES: {
            URL: "citizen/get-risk-entries",
            method: "POST"
        }
    }
}