import { useQuery } from "@tanstack/react-query";
import { getMySellerProducts } from "../../../services/products/products.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useGetMySellerProducts = () => {
  return useQuery({
    queryKey: queryKeys.products.seller(),
    queryFn: getMySellerProducts,
    staleTime: 2 * 60 * 1000
  });
};