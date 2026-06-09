import { useMutation } from "@tanstack/react-query";
import { verifyResetOtp } from "../../../services/auth/auth.service";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useVerifyResetOtp = () => {
  const handleError = useApiErrorHandler();

  return useMutation({
    mutationFn: verifyResetOtp,

    onError: (error) => {
      handleError(error);
    }
  });
};