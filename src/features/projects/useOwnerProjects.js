import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectService";


function useOwnerProjects() {
    return useQuery({
        queryKey: ["owner-projects"],
        queryFn: getOwnerProjectsApi,
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    })
};
export default useOwnerProjects;