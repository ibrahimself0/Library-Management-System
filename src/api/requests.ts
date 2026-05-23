import {sendRequest} from "./client.ts";

export function login(email: string, password: string) {
    return sendRequest("login",{
        email:email,
        password:password,
    })
}