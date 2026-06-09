import { useQuery } from "@tanstack/react-query";
import { getMyProductSeller } from "../../../api/modules/productSeller/productSeller.api";
import { queryKeys } from "../../../utils/queryKeys";

export const useMyProductSeller = () => {
  return useQuery({
    queryKey: queryKeys.productSeller.me(),
    queryFn: getMyProductSeller,
    staleTime: 5 * 60 * 1000
  });
};