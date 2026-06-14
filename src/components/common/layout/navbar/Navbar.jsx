import { AppBar, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Brand from "./Brand";
import NavLinks from "./NavLinks";
import AuthActions from "./AuthActions";
import UserAvatarButton from "../../UserAvatarButton";
import { useBuyerProfile } from "../../../../hooks/api/profile/buyerProfile.hooks";

export default function Navbar() {
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);

  console.log("[Navbar] AUTH STATE =>", {
    isAuthenticated,
  });

  const { data: profile, isLoading, isError } = useBuyerProfile({
    enabled: isAuthenticated,
  });

  console.log("[Navbar] PROFILE QUERY STATE =>", {
    enabled: isAuthenticated,
    profile,
    isLoading,
    isError,
  });

  const isLoggedIn = isAuthenticated;

  console.log("[Navbar] RENDER STATE =>", {
    isLoggedIn,
    avatar: profile?.avatar,
  });

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="default"
      sx={(theme) => ({
        borderRadius: 0,
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        backdropFilter: "blur(8px)",
      })}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        {/* LEFT */}
        {console.log("[Navbar] render Brand")}
        <Brand onClick={() => {
          console.log("[Navbar] navigate => /");
          navigate("/");
        }} />

        {console.log("[Navbar] render NavLinks")}
        <NavLinks navigate={navigate} />

        {/* RIGHT SIDE */}
        {isLoggedIn ? (
          <>
            {console.log("[Navbar] render UserAvatarButton")}
            <UserAvatarButton
              avatar={profile?.profileAvatar.file.url}
              route="/profile"
            />
          </>
        ) : (
          <>
            {console.log("[Navbar] render AuthActions")}
            <AuthActions />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}