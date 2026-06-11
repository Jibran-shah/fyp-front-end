import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { getCart } from "../../../services/cart/cart.service";

export const useCart = () => {
  return useQuery({
    queryKey: queryKeys.cart.detail(),

    queryFn: async () => {
      const res = await getCart();
      return res.data;
    },

    select: (res) => res.data
  });
};