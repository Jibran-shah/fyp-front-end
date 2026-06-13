import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";
import { toast } from "react-toastify";

import {
  bulkDeleteProductSellers,
  createProductSeller,
  deleteProductSeller,
  getAllProductSellers,
  getMySellerProfile,
  getProductSellerById,
  updateProductSeller
} from "../../../services/productSeller/productSeller.service";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/auth.slice";

/* =========================
   BULK DELETE
========================= */
export const useBulkDeleteProductSellers = () => {
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: async (data) => {
      console.log("[useBulkDeleteProductSellers] MUTATION START =>", data);
      const res = await bulkDeleteProductSellers(data);
      console.log("[useBulkDeleteProductSellers] MUTATION SUCCESS =>", res);
      return res;
    },

    onSuccess: (data) => {
      console.log("[useBulkDeleteProductSellers] onSuccess => invalidate list", data);

      qc.invalidateQueries({
        queryKey: queryKeys.productSeller.all
      });
    },

    onError: (error) => {
      console.log("[useBulkDeleteProductSellers] ERROR =>", error);
      handleError(error, toast.error);
    }
  });
};

/* =========================
   CREATE
========================= */
export const useCreateProductSeller = () => {
  const dispatch = useDispatch()
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: async (data) => {
      console.log("[useCreateProductSeller] MUTATION START =>", data);
      const res = await createProductSeller(data);
      console.log("[useCreateProductSeller] MUTATION SUCCESS =>", res);
      return res;
    },

    onSuccess: (data) => {
      console.log("[useCreateProductSeller] onSuccess => invalidate me", data);
      dispatch(login(data.user));
      qc.invalidateQueries({
        queryKey: queryKeys.productSeller.me()
      });
    },

    onError: (error) => {
      console.log("[useCreateProductSeller] ERROR =>", error);
      handleError(error, toast.error);
    }
  });
};

/* =========================
   DELETE
========================= */
export const useDeleteProductSeller = () => {
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: async (id) => {
      console.log("[useDeleteProductSeller] MUTATION START =>", id);
      const res = await deleteProductSeller(id);
      console.log("[useDeleteProductSeller] MUTATION SUCCESS =>", res);
      return res;
    },

    onSuccess: (data) => {
      console.log("[useDeleteProductSeller] onSuccess => invalidate list", data);

      qc.invalidateQueries({
        queryKey: queryKeys.productSeller.all
      });
    },

    onError: (error) => {
      console.log("[useDeleteProductSeller] ERROR =>", error);
      handleError(error, toast.error);
    }
  });
};

/* =========================
   MY SELLER
========================= */
export const useMyProductSeller = () => {
  const handleError = useApiErrorHandler();

  return useQuery({
    queryKey: queryKeys.productSeller.me(),
    queryFn: async () => {
      console.log("[useMyProductSeller] QUERY START");
      const res = await getMySellerProfile();
      console.log("[useMyProductSeller] QUERY SUCCESS =>", res);
      return res;
    },
    staleTime: 5 * 60 * 1000
  });
};

/* =========================
   DETAIL
========================= */
export const useProductSeller = (id) => {
  const handleError = useApiErrorHandler();

  return useQuery({
    queryKey: queryKeys.productSeller.detail(id),
    queryFn: async () => {
      console.log("[useProductSeller] QUERY START =>", id);
      const res = await getProductSellerById(id);
      console.log("[useProductSeller] QUERY SUCCESS =>", res);
      return res;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000
  });
};

/* =========================
   LIST
========================= */
export const useProductSellers = (filters = {}) => {
  return useQuery({
    queryKey: queryKeys.productSeller.list(filters),
    queryFn: async () => {
      console.log("[useProductSellers] QUERY START =>", filters);
      const res = await getAllProductSellers(filters);
      console.log("[useProductSellers] QUERY SUCCESS =>", res);
      return res;
    },
    staleTime: 5 * 60 * 1000
  });
};

/* =========================
   UPDATE
========================= */
export const useUpdateProductSeller = () => {
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: async (payload) => {
      console.log("[useUpdateProductSeller] MUTATION START =>", payload);
      const res = await updateProductSeller(payload);
      console.log("[useUpdateProductSeller] MUTATION SUCCESS =>", res);
      return res;
    },

    onSuccess: (data) => {
      console.log("[useUpdateProductSeller] onSuccess => invalidate me", data);

      qc.invalidateQueries({
        queryKey: queryKeys.productSeller.me()
      });
    },

    onError: (error) => {
      console.log("[useUpdateProductSeller] ERROR =>", error);
      handleError(error, toast.error);
    }
  });
};