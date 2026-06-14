import { Box, Stack, Typography } from "@mui/material";
import ChatCard from "./ChatCard";

export default function ChatSidebar({ chats = [], onSelectChat }) {
  return (
    <Box sx={{ width: 320, borderRight: "1px solid #eee", p: 2 }}>
      <Stack spacing={2}>
        {chats.length === 0 && (
          <Typography>No chats yet</Typography>
        )}

        {chats.map((chat) => (
          <ChatCard
            key={chat.id}
            chat={chat}
            onSelect={onSelectChat}
          />
        ))}
      </Stack>
    </Box>
  );
}