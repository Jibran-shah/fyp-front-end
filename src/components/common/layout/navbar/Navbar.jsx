import { AppBar, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBuyerProfile } from "../../../../hooks/api/profile/useBuyerProfile";

import Brand from "./Brand";
import NavLinks from "./NavLinks";

import AuthActions from "./AuthActions";
import UserAvatarButton from "../../UserAvatarButton";



export default function Navbar() {
  const navigate = useNavigate();
  const { data: profile } = useBuyerProfile();
  
  const isLoggedIn = !!profile;

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
        <Brand onClick={() => navigate("/")} />

        <NavLinks navigate={navigate} />

        {/* RIGHT SIDE (AUTH SLOT) */}
        {isLoggedIn ? (
          <UserAvatarButton
            avatar={profile?.avatar}
            route="/profile"
          />
        ) : (
          <AuthActions />
        )}
      </Toolbar>
    </AppBar>);
}