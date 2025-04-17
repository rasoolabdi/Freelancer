import { useQuery } from "@tanstack/react-query"
import { getSingleProject } from "../../services/projectService"
import { useParams } from "react-router-dom";


const useSingleProject = () => {
    const { id } = useParams();
    
    const { isLoading , data } = useQuery({
        queryKey: ['project' , id],
        queryFn: () => getSingleProject(id),
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    });
    const { project } = data || {};
    return { isLoading , project }
};
export default useSingleProject;