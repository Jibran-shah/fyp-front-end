import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../../services/products/products.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useGetProductById = (id) => {
  return useQuery({
    queryKey: queryKeys.products.detail(id),
    queryFn: () => getProductById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000
  });
};