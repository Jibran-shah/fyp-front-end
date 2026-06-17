import { Stack } from "@mui/material";
import NavButton from "../NavButton";
import { APP_ROUTES } from "../../../../routes/navigation.routes";

export default function NavLinks({ navigate }) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ ml: 4 }}>
      <NavButton label="Home" onClick={() => navigate(APP_ROUTES.home)} />
      <NavButton label="Products" onClick={() => navigate(APP_ROUTES.products)} />
      <NavButton label="Services" onClick={() => navigate(APP_ROUTES.services)} />
      <NavButton label="Chats" onClick={() => navigate(APP_ROUTES.chats)} />
      <NavButton label="Dashboards" onClick={() => navigate(APP_ROUTES.dashboard)} />
    </Stack>
  );
}