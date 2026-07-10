import { endpoints }
    from "./endpoints";

import type {ApiMap} from "./apiTypes.ts";

const BASE_URL =
    "http://127.0.0.1:8000";

export async function sendRequest<
    T extends keyof ApiMap
>(
    endpoint: T,
    data: ApiMap[T]["request"]
): Promise<ApiMap[T]["response"]> {

    const config =
        endpoints[endpoint];

    const token =
        localStorage.getItem(
            "token"
        );

    let body:
        | FormData
        | string
        | undefined;

    const headers:
        Record<string, string> = {

        Accept:
            "application/json",
        "Accept-Language": "ar"
    };

    if (token) {
        headers.Authorization =
            `Bearer ${token}`;
    }


    if (config.isFormData) {

        const formData =
            new FormData();

        Object.entries(data ?? {})
            .forEach(([key, value]) => {

                formData.append(
                    key,
                    String(value)
                );

            });

        body = formData;

    } else {

        headers["Content-Type"] =
            "application/json";

        body =
            config.method === "POST" ||
            config.method === "PUT" ||
            config.method === "DELETE"
                ? JSON.stringify(data)
                : undefined;
    }

    const response = await fetch(
        BASE_URL + config.path,
        {
            method: config.method,
            headers,
            body
        }
    );

    if (!response.ok) {
        throw new Error(
            "Request failed"
        );
    }

    return response.json();
}