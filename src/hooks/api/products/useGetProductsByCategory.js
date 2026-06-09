import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../../../services/products/products.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useGetProductsByCategory = (categoryId) => {
  return useQuery({
    queryKey: queryKeys.products.byCategory(categoryId),
    queryFn: () => getProductsByCategory(categoryId),
    enabled: !!categoryId,
    staleTime: 5 * 60 * 1000
  });
};