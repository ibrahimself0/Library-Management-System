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
}