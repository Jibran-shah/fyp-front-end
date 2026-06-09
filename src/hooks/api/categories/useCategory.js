import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "../../../services/categories/categories.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useCategory = (id, enabled = true) => {
  return useQuery({
    queryKey: queryKeys.categories.detail(id),
    queryFn: () => getCategoryById(id),
    enabled: !!id && enabled,
    select: (res) => res?.data?.data
  });
};