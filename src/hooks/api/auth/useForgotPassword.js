import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../../services/auth/auth.service";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";
import { toast } from "react-toastify";

export const useForgotPassword = () => {
  const handleError = useApiErrorHandler();

  
  return useMutation({
    mutationFn: forgotPassword,

    onError: (error) => {
      handleError(error,toast.error);
    }
  });
};