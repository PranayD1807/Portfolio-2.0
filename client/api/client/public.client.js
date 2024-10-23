/* eslint-disable no-unused-vars */
import axios from "axios";
import queryString from "query-string";
const localHostUrl = "http://127.0.0.1:8080/";
const prodUrl = "https://portfolio-2-0-2so7.vercel.app/";
const baseURL = `${prodUrl}api/v1/`;

const publicClient = axios.create({
    baseURL,
    paramsSerializer: {
        encode: (params) => queryString.stringify(params),
    },
});

publicClient.interceptors.request.use(async (config) => {
    return {
        ...config,
        Headers: {
            "Content-Type": "application/json",
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