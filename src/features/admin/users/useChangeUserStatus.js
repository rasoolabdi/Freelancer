import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { changeUserStatusApi } from "../../../services/authService";


function useChangeUserStatus() {
    const {isPending: isChanging , mutateAsync: changeUserStatus } = useMutation({
        mutationFn: changeUserStatusApi,
        onSuccess: (data) => {
            toast.success(data.message)
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    })
    return {isChanging , changeUserStatus};
};
export default useChangeUserStatus;