import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "../../../utils/queryKeys";

import {
  createWithdrawRequest,
  getMyWithdrawRequests,
  updateWithdrawRequestStatus,
  getWithdrawRequestById,
} from "../../../services/withdraw/withdraw.service";

import { useApiErrorHandler } from "../../ui/useApiErrorHandler";
import { toast } from "react-toastify";

/* -------------------- CREATE WITHDRAW REQUEST -------------------- */
export const useCreateWithdrawRequest = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload) => {
      console.log("[useCreateWithdrawRequest] start:", payload);

      const res = await createWithdrawRequest(payload);

      console.log("[useCreateWithdrawRequest] response:", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useCreateWithdrawRequest] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.withdraw.all,
      });

      console.log("[useCreateWithdrawRequest] cache invalidated");
    },

    onError: (error) => {
      console.error("[useCreateWithdrawRequest] error:", error);
      handleError(error, toast.error);
    },
  });
};

/* -------------------- MY WITHDRAW REQUESTS -------------------- */
export const useMyWithdrawRequests = (params = {}) => {
  return useQuery({
    queryKey: queryKeys.withdraw.my(),

    queryFn: async () => {
      console.log("[useMyWithdrawRequests] fetching:", params);

      const res = await getMyWithdrawRequests(params);

      console.log("[useMyWithdrawRequests] response:", res);
      console.log("[useMyWithdrawRequests] data:", res?.data?.data);

      return res;
    },

    select: (res) => {
      console.log("[useMyWithdrawRequests] select transform");
      return res?.data?.data;
    },

    staleTime: 1000 * 60 * 2,

    onError: (err) => {
      console.error("[useMyWithdrawRequests] error:", err);
    },
  });
};

/* -------------------- UPDATE WITHDRAW STATUS -------------------- */
export const useUpdateWithdrawStatus = () => {
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      console.log("[useUpdateWithdrawStatus] start:", { id, data });

      const res = await updateWithdrawRequestStatus(id, data);

      console.log("[useUpdateWithdrawStatus] response:", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useUpdateWithdrawStatus] success:", data);

      queryClient.invalidateQueries({
        queryKey: queryKeys.withdraw.all,
      });

      console.log("[useUpdateWithdrawStatus] cache invalidated");
    },

    onError: (error) => {
      console.error("[useUpdateWithdrawStatus] error:", error);
      handleError(error, toast.error);
    },
  });
};

/* -------------------- GET SINGLE WITHDRAW REQUEST -------------------- */
export const useWithdrawRequest = (id, enabled = true) => {
  return useQuery({
    queryKey: queryKeys.withdraw.detail(id),
    enabled: !!id && enabled,

    queryFn: async () => {
      console.log("[useWithdrawRequest] fetching id:", id);

      const res = await getWithdrawRequestById(id);

      console.log("[useWithdrawRequest] response:", res);
      console.log("[useWithdrawRequest] data:", res?.data?.data);

      return res;
    },

    select: (res) => {
      console.log("[useWithdrawRequest] select transform");
      return res?.data?.data;
    },

    onError: (err) => {
      console.error("[useWithdrawRequest] error:", err);
    },
  });
};