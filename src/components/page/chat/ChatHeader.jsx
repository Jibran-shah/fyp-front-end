import { Box, Typography, Stack, Button } from "@mui/material";

export default function ChatHeader({
  title = "Chat",
  onOpenMembers,
  onOpenInfo
}) {
  return (
    <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography fontWeight={600}>
          {title}
        </Typography>

        <Stack direction="row" spacing={1}>
          {onOpenMembers && (
            <Button size="small" onClick={onOpenMembers}>
              Members
            </Button>
          )}

          {onOpenInfo && (
            <Button size="small" onClick={onOpenInfo}>
              Info
            </Button>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}