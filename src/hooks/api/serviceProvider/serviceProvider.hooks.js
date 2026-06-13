import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { useApiErrorHandler } from "../../ui/useApiErrorHandler";
import { queryKeys } from "../../../utils/queryKeys";

import {
  createServiceProvider,
  deleteServiceProvider,
  getServiceProviderById,
  getServiceProviders,
  updateServiceProviderByUser,
  bulkDeleteServiceProviders
} from "../../../services/serviceProvider/serviceProvider.service";
import {useDispatch} from "react-redux"
import { login } from "../../../store/slices/auth.slice";


/* =========================
   BULK DELETE
========================= */
export const useBulkDeleteServiceProviders = () => {
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: async (payload) => {
      console.log("[ServiceProvider] bulkDelete START", payload);
      return bulkDeleteServiceProviders(payload);
    },

    onSuccess: () => {
      console.log("[ServiceProvider] bulkDelete SUCCESS");
      qc.invalidateQueries({
        queryKey: queryKeys.serviceProvider.all
      });
    },

    onError: (error) => {
      console.error("[ServiceProvider] bulkDelete ERROR", error);
      handleError(error, toast.error);
    }
  });
};


/* =========================
   CREATE
========================= */
export const useCreateServiceProvider = () => {
  const dispatch = useDispatch()
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: async (payload) => {
      console.log("[ServiceProvider] create START", payload);
      return createServiceProvider(payload);
    },

    onSuccess: (data) => {
      console.log("[ServiceProvider] create SUCCESS",data);
      dispatch(login(data.user));
      qc.invalidateQueries({
        queryKey: queryKeys.serviceProvider.me()
      });
      qc.invalidateQueries({
        queryKey: queryKeys.profile.fullProfile(data.user.id)
      });
    },

    onError: (error) => {
      console.error("[ServiceProvider] create ERROR", error);
      handleError(error, toast.error);
    }
  });
};


/* =========================
   DELETE SINGLE
========================= */
export const useDeleteServiceProvider = () => {

  const dispatch = useDispatch()

  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: async (id) => {
      console.log("[ServiceProvider] delete START", { id });
      return deleteServiceProvider(id);
    },

    onSuccess: (data) => {
      console.log("[ServiceProvider] delete SUCCESS",data);
      dispatch(login(data.user));
      qc.invalidateQueries({
        queryKey: queryKeys.serviceProvider.all
      });
    },

    onError: (error) => {
      console.error("[ServiceProvider] delete ERROR", error);
      handleError(error, toast.error);
    }
  });
};


/* =========================
   GET MY SERVICE PROVIDER
========================= */
export const useMyServiceProvider = (enabled = true) => {
  return useQuery({
    queryKey: queryKeys.serviceProvider.me(),
    queryFn: async () => {
      console.log("[ServiceProvider] getMy START");
      const res = await getServiceProviders({ user: "me" });
      console.log("[ServiceProvider] getMy SUCCESS");
      return res;
    },
    enabled,
    staleTime: 5 * 60 * 1000,
    onError: (err) => {
      console.error("[ServiceProvider] getMy ERROR", err);
    }
  });
};


/* =========================
   GET BY ID
========================= */
export const useServiceProvider = (id) => {
  return useQuery({
    queryKey: queryKeys.serviceProvider.detail(id),
    queryFn: async () => {
      console.log("[ServiceProvider] getById START", { id });
      const res = await getServiceProviderById(id);
      console.log("[ServiceProvider] getById SUCCESS", { id });
      return res;
    },
    enabled: !!id,
    onError: (err) => {
      console.error("[ServiceProvider] getById ERROR", err);
    }
  });
};


/* =========================
   LIST
========================= */
export const useServiceProviders = (filters = {}) => {
  return useQuery({
    queryKey: queryKeys.serviceProvider.list(filters),
    queryFn: async () => {
      console.log("[ServiceProvider] list START", filters);
      const res = await getServiceProviders(filters);
      console.log("[ServiceProvider] list SUCCESS");
      return res;
    },
    staleTime: 5 * 60 * 1000,
    onError: (err) => {
      console.error("[ServiceProvider] list ERROR", err);
    }
  });
};


/* =========================
   UPDATE (BY USER)
========================= */
export const useUpdateServiceProviderByUser = () => {
  const qc = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: async (payload) => {
      console.log("[ServiceProvider] updateByUser START", payload);
      return updateServiceProviderByUser(payload);
    },

    onSuccess: () => {
      console.log("[ServiceProvider] updateByUser SUCCESS");
      qc.invalidateQueries({
        queryKey: queryKeys.serviceProvider.me()
      });
    },

    onError: (error) => {
      console.error("[ServiceProvider] updateByUser ERROR", error);
      handleError(error, toast.error);
    }
  });
};