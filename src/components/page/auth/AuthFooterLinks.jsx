import { Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AuthFooterLinks({
  mode // "login" | "register"
}) {
  const navigate = useNavigate();

  const config = {
    login: {
      text: "Don't have an account?",
      linkText: "Create one",
      to: "/register"
    },
    register: {
      text: "Already have an account?",
      linkText: "Sign in",
      to: "/login"
    }
  };

  const { text, linkText, to } = config[mode] || {};

  if (!mode) return null;

  return (
    <Stack alignItems="center" sx={{ mt: 1 }}>
      <Typography variant="body2" textAlign="center">
        {text}{" "}
        <Button
          size="small"
          onClick={() => navigate(to)}
          sx={{ textTransform: "none" }}
        >
          {linkText}
        </Button>
      </Typography>
    </Stack>
  );
}