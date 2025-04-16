import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";


const useEditProject = () => {
    const queryClient = useQueryClient();

    const {isPending: isUpdating , mutateAsync: editProject} = useMutation({
        mutationFn: editProjectApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({queryKey: ['owner-projects']})
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    });
    return { isUpdating , editProject };
};
export default useEditProject;