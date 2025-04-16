import { useQuery } from "@tanstack/react-query"
import { getCategoryListApi } from "../services/categoryService"

const useCategories = () => {
    const {isLoading , data} = useQuery({
        queryKey: ["categories"],
        queryFn: getCategoryListApi,
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: true
    });
    const { categories = [] } = data || {};

    const newCategories = categories.map((item) => ({
        label: item.title,
        value: item._id
    }));

    const transformedCategories = categories.map((item) => ({
        label: item.title,
        value: item.englishTitle
    }));
    return { newCategories , transformedCategories , isLoading };
};
export default useCategories;
