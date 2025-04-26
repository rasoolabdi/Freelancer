import { useQuery } from "@tanstack/react-query";
import { getProjectsApi } from "../services/projectService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

function useProjects() {
    const { search } = useLocation();
    const queryObject = queryString.parse(search); // way one conver url to object
    // const queryObject = Object.fromEntries(new URLSearchParams(search)); //way two conver url to object
    
    const {isLoading , data} = useQuery({
        queryKey: ["projects" , queryObject],
        queryFn: () => getProjectsApi(search),
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    });
    const { projects } = data || {};
    return { isLoading , projects }
};
export default useProjects;