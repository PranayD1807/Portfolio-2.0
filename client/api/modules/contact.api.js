import publicClient from "../client/public.client";

const contactEndpoints = {
    sendMail: `/contact`,
};

const contactApi = {
    sendMail: async (params = {}) => {
        try {
            const response = await publicClient.post(contactEndpoints.sendMail, params); // Pass params directly
            return { response };
        } catch (err) {
            return { err };
        }
    },
};

export default contactApi;
