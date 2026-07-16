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
    },
    forgotpassword:{
        method: "POST",
        path: "/api/auth/forgotpassword",
        isFormData: true
    },
    getPopularBooks:{
        method: "GET",
        path: "/api/books/popular",
        isFormData: false
    }


} as const;