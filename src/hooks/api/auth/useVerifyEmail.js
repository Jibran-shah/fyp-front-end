import { useMutation } from "@tanstack/react-query";
import { verifyEmail } from "../../../services/auth/auth.service";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";
import { toast } from "react-toastify";

export const useVerifyEmail = () => {
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: verifyEmail,

    onError: (error) => {
      handleError(error,toast.error);
    }
  });
};