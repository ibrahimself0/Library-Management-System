import type {User} from "../models/models.ts";

export interface ApiMap {

    login: {
        request: {
            email: string;
            password: string;
        };

        response: {
            token: string;
            user: User;
        };
    };
    register: {
        request: {
            first_name: string;
            last_name: string;
            email: string;
            password: string;
            password_confirmation: string;
        };

        response: {
            message: string;
        };
    };
}