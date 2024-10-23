import publicClient from "../client/public.client";

const experienceEndpoints = {
    getAllExperiences: `/experiences?sort=-isOngoing,-endsAt`,
};

const experienceApi = {
    getAllExperiences: async (params = {}) => {
        try {
            const response = await publicClient.get(experienceEndpoints.getAllExperiences, {
                params,
            });
            return { response };
        } catch (err) {
            return { err };
        }
    },
};

export default experienceApi;