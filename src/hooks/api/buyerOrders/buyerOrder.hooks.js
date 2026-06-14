import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../../../utils/queryKeys";
import { getBuyerOrderById, getMyBuyerOrders, cancelBuyerOrder } from "../../../services/buyerOrders/buyerOrders.service";

/* -------------------- SINGLE ORDER -------------------- */
export const useBuyerOrder = (id) => {
  return useQuery({
    queryKey: queryKeys.buyerOrders.detail(id),
    enabled: !!id,

    queryFn: async () => {
      console.log("[useBuyerOrder] fetching order:", id);

      const { data } = await getBuyerOrderById(id);

      console.log("[useBuyerOrder] response:", data);

      return data;
    },

    onError: (err) => {
      console.error("[useBuyerOrder] error:", err);
    },
  });
};

/* -------------------- CANCEL ORDER -------------------- */
export const useCancelBuyerOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (buyerOrderId) => {
      console.log("[useCancelBuyerOrder] start:", buyerOrderId);

      const res = await cancelBuyerOrder(buyerOrderId);

      console.log("[useCancelBuyerOrder] response:", res);

      return res;
    },

    onSuccess: (data, buyerOrderId) => {
      console.log("[useCancelBuyerOrder] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.buyerOrders.all,
      });

      console.log("[useCancelBuyerOrder] invalidated list");

      queryClient.invalidateQueries({
        queryKey: queryKeys.buyerOrders.detail(buyerOrderId),
      });

      console.log("[useCancelBuyerOrder] invalidated detail:", buyerOrderId);
    },

    onError: (err) => {
      console.error("[useCancelBuyerOrder] error:", err);
    },
  });
};

/* -------------------- MY ORDERS LIST -------------------- */
export const useMyBuyerOrders = (filters = {}) => {
  return useQuery({
    queryKey: queryKeys.buyerOrders.my(filters),

    queryFn: async () => {
      console.log("[useMyBuyerOrders] fetching with filters:", filters);

      const { data } = await getMyBuyerOrders(filters);

      console.log("[useMyBuyerOrders] response:", data);

      return data;
    },

    onError: (err) => {
      console.error("[useMyBuyerOrders] error:", err);
    },
  });
};