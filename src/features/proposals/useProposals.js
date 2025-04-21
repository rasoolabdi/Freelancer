import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalService";


const useProposals = () => {
    const { isLoading , data } = useQuery({
        queryKey: ['proposals'],
        queryFn: getProposalsApi,
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    });
    const {proposals} = data || {};
    return { isLoading , proposals };
};
export default useProposals;