import { useMutation }
    from "@tanstack/react-query";

import {forgotpassword}
    from "../api/requests";

export function useForgotPassword() {

    return useMutation({

        mutationFn: ({
                         email,
                     }: {
            email: string;

        }) =>
            forgotpassword(
                email,
            ),

    });
}
