export const endpoints = {

    login: {
        method: "POST",
        path: "/api/auth/login",
        isFormData: true
    },
    register: {
        method: "POST",
        path: "/api/auth/register",
        isFormData: true
    }


} as const;