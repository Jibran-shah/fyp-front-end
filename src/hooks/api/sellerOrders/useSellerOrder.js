import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getSellerOrderById } from "../../../services/sellerOrders/sellerOrder.service";

export const useSellerOrder = (id) => {
  return useQuery({
    queryKey: queryKeys.sellerOrders.detail(id),
    enabled: !!id,

    queryFn: async () => {
      const { data } = await getSellerOrderById(id);
      return data;
    }
  });
};