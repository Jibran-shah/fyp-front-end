import { useMutation } from "@tanstack/react-query";
import { resendVerifyEmail } from "../../../services/auth/auth.service";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useResendVerifyEmail = () => {
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: resendVerifyEmail,

    onError: (error) => {
      handleError(error);
    }
  });
};