import { useMutation }
    from "@tanstack/react-query";

import {getPopularBooks}
    from "../api/requests";

export function usePopularBooks() {

    return useMutation({
        mutationFn: () => getPopularBooks(),
    });
}
