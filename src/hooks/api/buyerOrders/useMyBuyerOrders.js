import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getMyBuyerOrders } from "../../../services/buyerOrders/buyerOrders.service";

export const useMyBuyerOrders = (filters = {}) => {
  return useQuery({
    queryKey: queryKeys.buyerOrders.my(filters),

    queryFn: async () => {
      const { data } = await getMyBuyerOrders(filters);
      return data;
    }
  });
};