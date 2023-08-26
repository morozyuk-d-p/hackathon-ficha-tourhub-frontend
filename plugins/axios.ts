import { Axios } from 'axios';

export default defineNuxtPlugin(() => {
    return {
        provide: {
            axios: new Axios({
                // DON'T CHANGE BASE URL!!!
                baseURL: useRuntimeConfig().public.apiBase,
                transformResponse: (data) => {
                    try {
                        return JSON.parse(data);
                    } catch (error) {
                        console.error(`${error} caused while parsing ${data}`);
                        throw error;
                    }
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
        },
    };
});