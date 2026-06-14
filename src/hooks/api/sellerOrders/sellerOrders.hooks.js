import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../../../utils/queryKeys";
import {
  cancelSellerOrder,
  markAsDelivered,
  markAsProcessing,
  markAsShipped,
  getMySellerOrders,
  getSellerOrderById,
  updateSellerOrderStatus,
} from "../../../services/sellerOrders/sellerOrder.service";

/* -------------------- CANCEL ORDER -------------------- */
export const useCancelSellerOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      console.log("[useCancelSellerOrder] start:", id);

      const res = await cancelSellerOrder(id);

      console.log("[useCancelSellerOrder] response:", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useCancelSellerOrder] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.sellerOrders.all,
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.orders.all,
      });

      console.log("[useCancelSellerOrder] cache invalidated");
    },

    onError: (err) => {
      console.error("[useCancelSellerOrder] error:", err);
    },
  });
};

/* -------------------- MARK DELIVERED -------------------- */
export const useMarkAsDelivered = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      console.log("[useMarkAsDelivered] start:", id);

      const res = await markAsDelivered(id);

      console.log("[useMarkAsDelivered] response:", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useMarkAsDelivered] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.sellerOrders.all,
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.orders.all,
      });

      console.log("[useMarkAsDelivered] cache invalidated");
    },

    onError: (err) => {
      console.error("[useMarkAsDelivered] error:", err);
    },
  });
};

/* -------------------- MARK PROCESSING -------------------- */
export const useMarkAsProcessing = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      console.log("[useMarkAsProcessing] start:", id);

      const res = await markAsProcessing(id);

      console.log("[useMarkAsProcessing] response:", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useMarkAsProcessing] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.sellerOrders.all,
      });

      console.log("[useMarkAsProcessing] cache invalidated");
    },

    onError: (err) => {
      console.error("[useMarkAsProcessing] error:", err);
    },
  });
};

/* -------------------- MARK SHIPPED -------------------- */
export const useMarkAsShipped = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      console.log("[useMarkAsShipped] start:", id);

      const res = await markAsShipped(id);

      console.log("[useMarkAsShipped] response:", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useMarkAsShipped] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.sellerOrders.all,
      });

      console.log("[useMarkAsShipped] cache invalidated");
    },

    onError: (err) => {
      console.error("[useMarkAsShipped] error:", err);
    },
  });
};

/* -------------------- MY SELLER ORDERS -------------------- */
export const useMySellerOrders = (filters = {}) => {
  return useQuery({
    queryKey: queryKeys.sellerOrders.my(filters),

    queryFn: async () => {
      console.log("[useMySellerOrders] fetching:", filters);

      const res = await getMySellerOrders(filters);

      console.log("[useMySellerOrders] response:", res);
      console.log("[useMySellerOrders] data:", res?.data);

      return res?.data;
    },

    onError: (err) => {
      console.error("[useMySellerOrders] error:", err);
    },
  });
};

/* -------------------- SINGLE SELLER ORDER -------------------- */
export const useSellerOrder = (id) => {
  return useQuery({
    queryKey: queryKeys.sellerOrders.detail(id),
    enabled: !!id,

    queryFn: async () => {
      console.log("[useSellerOrder] fetching id:", id);

      const res = await getSellerOrderById(id);

      console.log("[useSellerOrder] response:", res);
      console.log("[useSellerOrder] data:", res?.data);

      return res?.data;
    },

    onError: (err) => {
      console.error("[useSellerOrder] error:", err);
    },
  });
};

/* -------------------- UPDATE ORDER STATUS -------------------- */
export const useUpdateSellerOrderStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      console.log("[useUpdateSellerOrderStatus] start:", { id, data });

      const res = await updateSellerOrderStatus(id, data);

      console.log("[useUpdateSellerOrderStatus] response:", res);

      return res;
    },

    onSuccess: (data, variables) => {
      console.log("[useUpdateSellerOrderStatus] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.sellerOrders.all,
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.sellerOrders.detail(variables.id),
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.orders.all,
      });

      console.log("[useUpdateSellerOrderStatus] cache invalidated");
    },

    onError: (err) => {
      console.error("[useUpdateSellerOrderStatus] error:", err);
    },
  });
};