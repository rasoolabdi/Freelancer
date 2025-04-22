import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";

function useProjects() {
    const {isLoading , data} = useQuery({
        queryKey: ["projects"],
        queryFn: getProjectsApi,
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    });
    const { projects } = data || {};
    return { isLoading , projects }
};
export default useProjects;