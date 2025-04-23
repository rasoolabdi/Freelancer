import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProposalApi } from "../../services/proposalService";
import toast from "react-hot-toast";

const useCreateProposal = () => {
    const queryClient = useQueryClient();

    const { isPending: isCreatingProposal , mutateAsync: createProposal} = useMutation({
        mutationFn: createProposalApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({queryKey: ['proposals']})
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    });
    return { isCreatingProposal , createProposal };
};
export default useCreateProposal;