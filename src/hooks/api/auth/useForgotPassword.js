import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../../services/auth/auth.service";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";

export const useForgotPassword = () => {
  const handleError = useApiErrorHandler();

  
  return useMutation({
    mutationFn: forgotPassword,

    onError: (error) => {
      handleError(error);
    }
  });
};