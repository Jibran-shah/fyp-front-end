import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../services/categories/categories.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useCategories = (params = {}) => {
  return useQuery({
    queryKey: queryKeys.categories.list(params),
    queryFn: () => getCategories(params),
    select: (res) => res?.data?.data,
    staleTime: 1000 * 60 * 5
  });
};