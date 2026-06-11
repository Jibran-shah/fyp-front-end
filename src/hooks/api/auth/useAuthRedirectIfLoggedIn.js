import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function useAuthRedirectIfLoggedIn(redirectTo) {
  const navigate = useNavigate();

  const { isAuthenticated, authReady, user } = useSelector(
    (state) => state.auth
  );



  useEffect(() => {

    if (!authReady) return;

    if (isAuthenticated) {
      console.log("redirected", user)
      navigate(redirectTo, { replace: true });
    }

  }, [isAuthenticated, authReady, navigate, redirectTo]);
}