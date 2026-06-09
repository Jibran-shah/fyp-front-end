import { AppBar, Toolbar, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBuyerProfile } from "../../../hooks/api/profile/useBuyerProfile";


export default function Navbar() {
  const navigate = useNavigate();
  const { data: profile } = useBuyerProfile();

  const roles = profile?.role || [];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#111827" }}>
      <Toolbar>

        {/* BRAND */}
        <Typography
          sx={{ cursor: "pointer", fontWeight: 600 }}
          onClick={() => navigate("/")}
        >
          Marketplace
        </Typography>

        {/* NAV LINKS */}
        <Stack direction="row" spacing={2} sx={{ ml: 4 }}>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>

          <Button color="inherit" onClick={() => navigate("/products")}>
            Products
          </Button>

          <Button color="inherit" onClick={() => navigate("/services")}>
            Services
          </Button>

          <Button color="inherit" onClick={() => navigate("/profile")}>
            Profile
          </Button>

          <Button color="inherit" onClick={() => navigate("/dashboard")}>
            Dashboard
          </Button>
        </Stack>

        {/* RIGHT SIDE ROLE INFO */}
        <Stack direction="row" spacing={1} sx={{ ml: "auto" }}>
          {roles?.map((r) => (
            <Typography
              key={r}
              sx={{
                fontSize: 12,
                backgroundColor: "#374151",
                px: 1,
                borderRadius: 1
              }}
            >
              {r}
            </Typography>
          ))}
        </Stack>

      </Toolbar>
    </AppBar>
  );
}