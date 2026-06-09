import { useQuery } from "@tanstack/react-query";
import { getCategoryTree } from "../../../services/categories/categories.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useCategoryTree = (params = {}) => {
  return useQuery({
    queryKey: queryKeys.categories.tree(params),
    queryFn: () => getCategoryTree(params),
    select: (res) => res?.data?.data,
    staleTime: 1000 * 60 * 10
  });
};