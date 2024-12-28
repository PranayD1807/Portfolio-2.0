import publicClient from "../client/public.client";

const visitsEndpoints = {
    logVisit: `/visits`,
};

const visitApi = {
    logVisit: async (params = {}) => {
        try {
            const response = await publicClient.post(visitsEndpoints.logVisit, params);
            return { response };
        } catch (err) {
            return { err };
        }
    },
};

export default visitApi;
