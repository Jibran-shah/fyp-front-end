import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { logout } from "../../../services/auth/auth.service";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";
import { setAuthenticated, setUser } from "../../../store/slices/auth.slice";
import {toast} from "react-toastify"

export const useLogout = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const handleError = useApiErrorHandler();
  
  return useMutation({
    mutationFn: logout,

    onSuccess: () => {
      // 1. reset redux auth state
      dispatch(setAuthenticated(false));
      dispatch(setUser(null));

      // 2. clear all cached server state
      queryClient.clear();
    },

    onError: (error) => {
      handleError(error,toast.error);
    }
  });
};