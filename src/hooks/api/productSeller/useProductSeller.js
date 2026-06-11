import { useQuery } from "@tanstack/react-query";
import { getProductSellerById } from "../../../services/productSeller/productSeller.service";
import { queryKeys } from "../../../utils/queryKeys";

export const useProductSeller = (id) => {
  return useQuery({
    queryKey: queryKeys.productSeller.detail(id),
    queryFn: () => getProductSellerById(id),
    enabled: !!id
  });
};