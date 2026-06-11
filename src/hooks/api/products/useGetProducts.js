import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../../services/products/products.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useGetProducts = (params = {}) => {
  return useQuery({
    queryKey: queryKeys.products.list(params),
    queryFn: () => getProducts(params),
    keepPreviousData: true,
    staleTime: 2 * 60 * 1000
  });
};


