import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import {
  getCategories,
  getCategoryById,
  getCategoryTree,
  createCategory,
  deleteCategory,
  updateCategory
} from "../../../services/categories/categories.service";

import { queryKeys } from "../../../utils/queryKeys";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

/* =========================
   GET ALL CATEGORIES
========================= */
export const useCategories = (params = {}) => {
  console.log("[useCategories] params:", params);

  return useQuery({
    queryKey: queryKeys.categories.list(params),

    queryFn: async () => {
      console.log("[useCategories] fetching categories...");
      const res = await getCategories(params);
      console.log("[useCategories] response:", res);
      return res;
    },

    select: (res) => {
      const data = res?.data?.data;
      console.log("[useCategories] selected:", data);
      return data;
    },

    staleTime: 1000 * 60 * 5
  });
};

/* =========================
   GET CATEGORY BY ID
========================= */
export const useCategory = (id, enabled = true) => {
  console.log("[useCategory] id:", id, "enabled:", enabled);

  return useQuery({
    queryKey: queryKeys.categories.detail(id),

    queryFn: async () => {
      console.log("[useCategory] fetching category by id...");
      const res = await getCategoryById(id);
      console.log("[useCategory] response:", res);
      return res;
    },

    enabled: !!id && enabled,

    select: (res) => {
      const data = res?.data?.data;
      console.log("[useCategory] selected:", data);
      return data;
    }
  });
};


export const useCategoryTree = (params = {}) => {
  return useQuery({
    queryKey: queryKeys.categories.tree(params),

    queryFn: async () => {
      const res = await getCategoryTree(params);
      return res.tree; // ✅ your chosen structure
    },

    staleTime: 1000 * 60 * 10
  });
};

/* =========================
   CREATE CATEGORY
========================= */
export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const handleError = useApiErrorHandler();

  console.log("[useCreateCategory] initialized");

  return useMutation({
    mutationFn: async (data) => {
      console.log("[useCreateCategory] payload:", data);

      const res = await createCategory(data);

      console.log("[useCreateCategory] response:", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useCreateCategory] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.categories.all
      });

      console.log("[useCreateCategory] cache invalidated");
    },

    onError: (error) => {
      console.error("[useCreateCategory] error:", error);
      handleError(error, toast.error);
    }
  });
};

/* =========================
   DELETE CATEGORY
========================= */
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const handleError = useApiErrorHandler();

  console.log("[useDeleteCategory] initialized");

  return useMutation({
    mutationFn: async (id) => {
      console.log("[useDeleteCategory] id:", id);

      const res = await deleteCategory(id);

      console.log("[useDeleteCategory] response:", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useDeleteCategory] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.categories.all
      });

      console.log("[useDeleteCategory] cache invalidated");
    },

    onError: (error) => {
      console.error("[useDeleteCategory] error:", error);
      handleError(error);
    }
  });
};

/* =========================
   UPDATE CATEGORY
========================= */
export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  const handleError = useApiErrorHandler();

  console.log("[useUpdateCategory] initialized");

  return useMutation({
    mutationFn: async ({ id, data }) => {
      console.log("[useUpdateCategory] id:", id);
      console.log("[useUpdateCategory] payload:", data);

      const res = await updateCategory(id, data);

      console.log("[useUpdateCategory] response:", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useUpdateCategory] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.categories.all
      });

      console.log("[useUpdateCategory] cache invalidated");
    },

    onError: (error) => {
      console.error("[useUpdateCategory] error:", error);
      handleError(error, toast.error);
    }
  });
};