import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../services/authService";
import toast from "react-hot-toast";
import { replace, useNavigate } from "react-router-dom";

const useLogout = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate;
    
    const {isPending: isLogouting , mutateAsync: logout} = useMutation({
        mutationFn: logoutApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.removeQueries();
            navigate("/auth" , {replace: true})
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    });
    return { isLogouting , logout };
};
export default useLogout;