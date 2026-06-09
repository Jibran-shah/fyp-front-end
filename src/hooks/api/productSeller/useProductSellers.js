import { useQuery } from "@tanstack/react-query";
import { getProductSellers } from "../../../api/modules/productSeller/productSeller.api";
import { queryKeys } from "../../../utils/queryKeys";

export const useProductSellers = (filters = {}) => {
  return useQuery({
    queryKey: queryKeys.productSeller.list(filters),
    queryFn: () => getProductSellers(filters),
    staleTime: 5 * 60 * 1000
  });
};