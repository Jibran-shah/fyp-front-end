import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

// services
import {
  getMyBuyerProfile,
  getBuyerProfileById,
  createBuyerProfile,
  deleteBuyerProfile,
  getFullProfile,
  updateBuyerProfile
} from "../../../services/profile/profile.service";

// utils
import { buildBuyerProfileFormData } from "../../../utils/form/buyerProfileFormData";

// redux
import { login, logout } from "../../../store/slices/auth.slice";
import { queryKeys } from "../../../utils/queryKeys";


/* =========================
   CURRENT BUYER PROFILE
========================= */
export const useBuyerProfile = (options = {}) => {
  console.log("[useBuyerProfile] INIT =>", options);

  return useQuery({
    queryKey: ["buyer-profile", "me"],
    queryFn: async () => {
      console.log("[useBuyerProfile] QUERY START => /me");
      const res = await getMyBuyerProfile();
      console.log("[useBuyerProfile] QUERY SUCCESS =>", res);
      return res;
    },
    enabled: options.enabled
  });
};


/* =========================
   BUYER PROFILE BY ID
========================= */
export const useBuyerProfileById = (id) => {
  console.log("[useBuyerProfileById] INIT =>", id);

  return useQuery({
    queryKey: ["buyer-profile", id],
    queryFn: async () => {
      console.log("[useBuyerProfileById] QUERY START =>", id);
      const res = await getBuyerProfileById(id);
      console.log("[useBuyerProfileById] QUERY SUCCESS =>", res);
      return res;
    },
    enabled: !!id
  });
};


/* =========================
   CREATE BUYER PROFILE
========================= */
export const useCreateBuyerProfile = () => {
  const queryClient = useQueryClient();
  const handleError = useApiErrorHandler();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async (data) => {
      console.log("[useCreateBuyerProfile] MUTATION START =>", data);
      const formData = buildBuyerProfileFormData(data);
      console.log("[useCreateBuyerProfile] FORM DATA =>", formData);
      const result = await createBuyerProfile(formData);
      console.log("[useCreateBuyerProfile] MUTATION Response =>", result);
      return result;
    },

    onSuccess: (data) => {
      console.log("[useCreateBuyerProfile] onSuccess => invalidate cache", data);
       dispatch(login(data?.user));
      queryClient.invalidateQueries({
        queryKey: ["buyer-profile", "me"]
      });
    },

    onError: (error) => {
      console.log("[useCreateBuyerProfile] ERROR =>", error);
      handleError(error, toast.error);
    }
  });
};


/* =========================
   DELETE BUYER PROFILE
========================= */
export const useDeleteBuyerProfile = () => {
  const queryClient = useQueryClient();
  const handleError = useApiErrorHandler();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async () => {
      console.log("[useDeleteBuyerProfile] MUTATION START");
      const res = await deleteBuyerProfile();
      console.log("[useDeleteBuyerProfile] MUTATION SUCCESS =>", res);
      return res;
    },

    onSuccess: () => {
      console.log("[useDeleteBuyerProfile] onSuccess => logout + clear cache");

      dispatch(logout());

      queryClient.removeQueries({
        queryKey: ["buyer-profile", "me"]
      });
    },

    onError: (error) => {
      console.log("[useDeleteBuyerProfile] ERROR =>", error);
      handleError(error, toast.error);
    }
  });
};


/* =========================
   FULL PROFILE
========================= */
export const useGetFullProfile = (id) => {
  console.log("[useGetFullProfile] INIT =>", id);
  return useQuery({
    queryKey: queryKeys.profile.fullProfile(id),
    queryFn: async () => {
      console.log("[useGetFullProfile] QUERY START =>", id);
      const res = await getFullProfile(id);
      console.log("[useGetFullProfile] QUERY SUCCESS =>", res);
      return res;
    },
    enabled: !!id
  });
};


/* =========================
   UPDATE BUYER PROFILE
========================= */
export const useUpdateBuyerProfile = () => {
  const queryClient = useQueryClient();
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: async (data) => {
      console.log("[useUpdateBuyerProfile] MUTATION START =>", data);

      const formData = buildBuyerProfileFormData(data);
      console.log("[useUpdateBuyerProfile] FORM DATA =>", formData);

      const res = await updateBuyerProfile(formData);

      console.log("[useUpdateBuyerProfile] MUTATION SUCCESS =>", res);

      return res;
    },

    onSuccess: (data) => {
      console.log("[useUpdateBuyerProfile] onSuccess => invalidate me", data);

      queryClient.invalidateQueries({
        queryKey: ["buyer-profile", "me"]
      });
    },

    onError: (error) => {
      console.log("[useUpdateBuyerProfile] ERROR =>", error);
      handleError(error, toast.error);
    }
  });
};