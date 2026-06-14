import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  createService,
  getServices,
  getMyServices,
  getServiceById,
  updateService,
  deleteService
} from "../../../services/services/services.service";

import { queryKeys } from "../../../utils/queryKeys";

/* =========================
   CREATE SERVICE
========================= */

export const useCreateService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => {
      console.log("[useCreateService] payload:", data);
      return createService(data);
    },

    onSuccess: (data) => {
      console.log("[useCreateService] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.services.all
      });
    },

    onError: (error) => {
      console.error("[useCreateService] error:", error);
    }
  });
};

/* =========================
   DELETE SERVICE
========================= */

export const useDeleteService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => {
      console.log("[useDeleteService] id:", id);
      return deleteService(id);
    },

    onSuccess: (data) => {
      console.log("[useDeleteService] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.services.all
      });
    },

    onError: (error) => {
      console.error("[useDeleteService] error:", error);
    }
  });
};

/* =========================
   MY SERVICES
========================= */

export const useMyServices = () => {
  return useQuery({
    queryKey: queryKeys.services.my(),

    queryFn: async () => {
      console.log("[useMyServices] fetching...");

      const res = await getMyServices();

      console.log("[useMyServices] response:", res);

      return res;
    },

    select: (res) => {
      console.log("[useMyServices] selected:", res?.data);
      return res.data;
    }
  });
};

/* =========================
   SERVICE DETAIL
========================= */

export const useService = (id) => {
  return useQuery({
    queryKey: queryKeys.services.detail(id),

    queryFn: async () => {
      console.log("[useService] fetching id:", id);

      const res = await getServiceById(id);

      console.log("[useService] response:", res);

      return res;
    },

    enabled: !!id,

    select: (res) => {
      console.log("[useService] selected:", res?.data);
      return res.data;
    }
  });
};

/* =========================
   SERVICES LIST
========================= */

export const useServices = (filters = {}) => {
  return useQuery({
    queryKey: queryKeys.services.list(filters),

    queryFn: async () => {
      console.log("[useServices] filters:", filters);

      const res = await getServices(filters);

      console.log("[useServices] response:", res);

      return res;
    },

    staleTime: 5 * 60 * 1000
  });
};

/* =========================
   UPDATE SERVICE
========================= */

export const useUpdateService = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload) => {
      console.log("[useUpdateService] payload:", payload);
      return updateService(payload);
    },

    onSuccess: (data, variables) => {
      console.log("[useUpdateService] success:", data);
      console.log("[useUpdateService] variables:", variables);

      queryClient.invalidateQueries({
        queryKey: queryKeys.services.all
      });

      queryClient.invalidateQueries({
        queryKey: queryKeys.services.detail(variables.id)
      });
    },

    onError: (error) => {
      console.error("[useUpdateService] error:", error);
    }
  });
};