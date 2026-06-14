import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { addToCart } from "../../../services/cart/cart.service";
import { getCart } from "../../../services/cart/cart.service";
import { clearCart } from "../../../services/cart/cart.service";
import { removeCartItem } from "../../../services/cart/cart.service";
import { updateCartItem } from "../../../services/cart/cart.service";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ productId, quantity = 1 }) => {
      console.log("[useAddToCart] mutation started", { productId, quantity });

      const res = await addToCart({ productId, quantity });

      console.log("[useAddToCart] API response", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useAddToCart] success", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.cart.all,
      });

      console.log("[useAddToCart] cart invalidated");
    },

    onError: (error) => {
      console.error("[useAddToCart] error", error);
    },
  });
};

export const useCart = () => {
  return useQuery({
    queryKey: queryKeys.cart.detail(),

    queryFn: async () => {
      console.log("[useCart] fetching cart...");

      const res = await getCart();

      console.log("[useCart] API response", res);

      console.log("[useCart] cart data", res.data);

      return res.data;
    },

    onError: (error) => {
      console.error("[useCart] error", error);
    },
  });
};

export const useClearCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      console.log("[useClearCart] mutation started");

      const res = await clearCart();

      console.log("[useClearCart] API response", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useClearCart] success", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.cart.all,
      });

      console.log("[useClearCart] cart invalidated");
    },

    onError: (error) => {
      console.error("[useClearCart] error", error);
    },
  });
};

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (itemId) => {
      console.log("[useRemoveCartItem] mutation started", itemId);

      const res = await removeCartItem(itemId);

      console.log("[useRemoveCartItem] API response", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useRemoveCartItem] success", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.cart.all,
      });

      console.log("[useRemoveCartItem] cart invalidated");
    },

    onError: (error) => {
      console.error("[useRemoveCartItem] error", error);
    },
  });
};

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => {
      console.log("[useUpdateCartItem] mutation started", payload);

      const res = await updateCartItem(payload);

      console.log("[useUpdateCartItem] API response", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useUpdateCartItem] success", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.cart.all,
      });

      console.log("[useUpdateCartItem] cart invalidated");
    },

    onError: (error) => {
      console.error("[useUpdateCartItem] error", error);
    },
  });
};