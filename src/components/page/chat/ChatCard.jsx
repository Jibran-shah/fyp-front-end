import { Box, Stack, Paper, Typography, Avatar, Button } from "@mui/material";

export default function ChatCard({ chat, onSelect }) {
  return (
    <Paper
      elevation={0}
      onClick={() => onSelect?.(chat.id)}
      sx={{
        p: 2,
        cursor: "pointer",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        transition: "0.2s",
        "&:hover": {
          boxShadow: 2,
          transform: "translateY(-1px)",
        },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        {/* Avatar */}
        <Avatar>
          {chat?.name?.charAt(0)?.toUpperCase() || "C"}
        </Avatar>

        {/* Chat Info */}
        <Box flex={1} minWidth={0}>
          <Typography fontWeight={600} noWrap>
            {chat.name}
          </Typography>

          <Typography variant="body2" color="text.secondary" noWrap>
            {chat.lastMessage?.content || "No messages yet"}
          </Typography>
        </Box>

        {/* Optional action */}
        <Button size="small" variant="outlined">
          Open
        </Button>
      </Stack>
    </Paper>
  );
}