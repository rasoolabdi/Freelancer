import { useMutation, useQueryClient } from "@tanstack/react-query"
import { changeProposalStatusApi } from "../../services/proposalService"
import toast from "react-hot-toast"

const useChangeProposalStatus = () => {

    const {isPending: isChangingProposal , mutateAsync: changeProposalStatus } = useMutation({
        mutationFn: changeProposalStatusApi,
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    });
    return { isChangingProposal , changeProposalStatus };
};
export default useChangeProposalStatus;