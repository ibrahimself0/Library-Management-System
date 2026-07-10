import { useMutation }
    from "@tanstack/react-query";

import {register}
    from "../api/requests";

export function useRegister() {

    return useMutation({

        mutationFn: ({
                         email,
                         password,
                        first_name,
                        last_name,
                        password_confirmation,
                     }: {
            email: string;
            password: string;
            first_name: string;
            last_name: string;
            password_confirmation: string;
        }) =>
            register(
                email,
                password,
                password_confirmation,
                first_name,
                last_name,
            ),


    });
}
