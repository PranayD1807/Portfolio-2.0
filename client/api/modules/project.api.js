import publicClient from "../client/public.client";

const projectEndpoints = {
    getAllProjects: `/projects`,
};

const projectApi = {
    getAllProjects: async (params = {}) => {
        try {
            const response = await publicClient.get(projectEndpoints.getAllProjects, {
                params,
            });
            return { response };
        } catch (err) {
            return { err };
        }
    },
};

export default projectApi;