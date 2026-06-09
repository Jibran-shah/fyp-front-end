import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getMySellerOrders } from "../../../services/sellerOrders/sellerOrder.service";


export const useMySellerOrders = (filters = {}) => {
  return useQuery({
    queryKey: queryKeys.sellerOrders.my(filters),

    queryFn: async () => {
      const { data } = await getMySellerOrders(filters);
      return data;
    }
  });
};