import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toggleProjectStatusApi } from "../../services/projectService"
import toast from "react-hot-toast"


const useToggleProjectStatus = (data) => {
    const queryClient = useQueryClient();

    const {isPending: isToggling , mutateAsync: toggleProjectStatus } = useMutation({
        mutationFn: toggleProjectStatusApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({queryKey: ['owner-projects']})
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    });
    return {isToggling , toggleProjectStatus};
};
export default useToggleProjectStatus;