import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useVerifyEmail } from "../../hooks/api/auth/useVerifyEmail";

export default function VerifyEmailPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const mutation = useVerifyEmail();

  useEffect(() => {
    const userId = params.get("userId");
    const token = params.get("token");

    if (!userId || !token) return;

    mutation.mutate(
      { userId, token },
      {
        onSuccess: () => {
          navigate("/login");
        }
      }
    );
  }, [params, mutation, navigate]);

  if (mutation.isPending) {
    return <div>Verifying email...</div>;
  }

  if (mutation.isError) {
    return <div>Email verification failed.</div>;
  }

  return null;
}