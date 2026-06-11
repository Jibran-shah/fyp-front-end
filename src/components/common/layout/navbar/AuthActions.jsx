import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AuthActions() {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={1} sx={{ ml: "auto" }}>
      <Button size="small" onClick={() => navigate("/login")}>
        Login
      </Button>

      <Button
        size="small"
        variant="contained"
        onClick={() => navigate("/register")}
      >
        Sign Up
      </Button>
    </Stack>
  );
}