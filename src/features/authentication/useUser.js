import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authService";

function useUser() {
    const {isLoading , data } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        retry: false
    });
    const { user } = data || {};
    return { isLoading , user}
};
export default useUser;