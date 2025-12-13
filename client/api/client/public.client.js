/* eslint-disable no-unused-vars */
import axios from "axios";
import queryString from "query-string";

const environment = process.env.NEXT_PUBLIC_ENV
const baseURL = `${environment == "PROD"
        ? process.env.NEXT_PUBLIC_PROD_SERVER_BASE_URL
        : process.env.NEXT_PUBLIC_DEV_SERVER_BASE_URL}api/v1/`;

const publicClient = axios.create({
    baseURL,
    paramsSerializer: {
        encode: (params) => queryString.stringify(params),
    },
});

publicClient.interceptors.request.use(async (config) => {
    const sessionId = localStorage.getItem('session_id') || '';
    return {
        ...config,
        headers: {
            ...config.headers,
            "Content-Type": "application/json",
            "Session-ID": sessionId,
        },
    };
});


publicClient.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data;
        return response;
    },
    (err) => {
        throw err.response.data;
    }
);

export default publicClient;