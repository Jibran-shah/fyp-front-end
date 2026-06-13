import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function useAuthRedirectIfLoggedIn(redirectTo = "/") {
  const navigate = useNavigate();
  const { isAuthenticated, authReady, user } = useSelector(
    (state) => state.auth
  )
  useEffect(() => {
    if (!authReady) return;
    if(user?.id){
      checkState(user,navigate,redirectTo,isAuthenticated);
    }
  }, [isAuthenticated, authReady, navigate, redirectTo,user]);
}


const checkState = (user,navigate,redirectTo,isAuthenticated)=>{
  console.log("inside useAuthRedirectIfLoggedIn",user,redirectTo,isAuthenticated);
  if(user && !user?.isEmailVerified){
    navigate("/emailNotVerifiedGate")
  }

  if(user && !user?.baseProfile){
    navigate("/profile/create")
  }

  if (user && isAuthenticated) {
    console.log("redirected", user)
    navigate(redirectTo, { replace: true });
  }
}