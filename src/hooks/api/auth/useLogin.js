import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../../services/auth/auth.service";
import { useApiErrorHandler } from "../../ui/useApiErrorHandler";
import { queryKeys } from "../../../utils/queryKeys";

export const useLogin = () => {
  console.log("🔥 useLogin HOOK INITIALIZED");
  const handleError = useApiErrorHandler();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      console.log("🔥 LOGIN MUTATION FIRED:", data);
      return login(data);
    },

    onSuccess: () => {
      console.log("✅ LOGIN SUCCESS RESPONSE RECEIVED");

      queryClient.invalidateQueries({
        queryKey: queryKeys.auth.me()
      });
    },

    onError: (err) => {
      console.log("❌ LOGIN MUTATION ERROR:", err);
      handleError(err);
    }
  });
};