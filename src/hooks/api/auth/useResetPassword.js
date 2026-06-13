import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../../services/auth/auth.service";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";
import {toast} from "react-toastify"

export const useResetPassword = () => {
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: resetPassword,

    onError: (error) => {
      handleError(error,toast.error);
    }
  });
};