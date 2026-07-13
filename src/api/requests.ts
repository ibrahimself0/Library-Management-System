import {sendRequest} from "./client.ts";

export function login(email: string, password: string) {
    return sendRequest("login",{
        email:email,
        password:password,
    })
}
export function register(email: string, password: string,password_confirmation: string,first_name: string, last_name: string) {
    return sendRequest("register",{
        email:email,
        password:password,
        password_confirmation:password_confirmation,
        first_name:first_name,
        last_name:last_name,
    })
}
export function forgotpassword(email: string) {
    return sendRequest("forgotpassword",{
        email:email,
    })
}