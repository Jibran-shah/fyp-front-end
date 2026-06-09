import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getBuyerOrderById } from "../../../services/buyerOrders/buyerOrders.service";

export const useBuyerOrder = (id) => {
  return useQuery({
    queryKey: queryKeys.buyerOrders.detail(id),
    enabled: !!id,

    queryFn: async () => {
      const { data } = await getBuyerOrderById(id);
      return data;
    }
  });
};