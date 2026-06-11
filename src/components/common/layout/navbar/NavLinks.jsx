import { Stack } from "@mui/material";
import NavButton from "../NavButton";

export default function NavLinks({ navigate }) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ ml: 4 }}>
      <NavButton label="Home" onClick={() => navigate("/")} />
      <NavButton label="Products" onClick={() => navigate("/products")} />
      <NavButton label="Services" onClick={() => navigate("/services")} />
      <NavButton label="Chats" onClick={() => navigate("/chats")} />
      <NavButton label="Dashboard" onClick={() => navigate("/dashboard")} />
    </Stack>
  );
}