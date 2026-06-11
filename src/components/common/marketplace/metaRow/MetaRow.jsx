import { Stack } from "@mui/material";

export default function MetaRow({ children }) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {children}
    </Stack>
  );
}