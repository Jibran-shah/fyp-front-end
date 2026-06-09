import { Stack } from "@mui/material";

export default function ActionPanel({ children }) {
  return (
    <Stack direction="row" spacing={2}>
      {children}
    </Stack>
  );
}