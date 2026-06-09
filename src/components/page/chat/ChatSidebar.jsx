import { Box, Stack, Paper, Typography, Avatar, Button } from "@mui/material";

export default function ChatSidebar({ chats = [], onSelectChat }) {
  return (
    <Box sx={{ width: 320, borderRight: "1px solid #eee", p: 2 }}>
      <Stack spacing={2}>
        {chats.length === 0 && (
          <Typography>No chats yet</Typography>
        )}

        {chats.map((chat) => (
          <Paper
            key={chat.id}
            sx={{ p: 2, cursor: "pointer" }}
            onClick={() => onSelectChat?.(chat.id)}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar />

              <Box flex={1}>
                <Typography fontWeight={600}>
                  {chat.name}
                </Typography>

                <Typography variant="body2">
                  {chat.lastMessage?.content || "No messages yet"}
                </Typography>
              </Box>

              <Button size="small">
                Open
              </Button>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}