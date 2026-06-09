import { Paper, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ChatSidebar from "../../components/chat/ChatSidebar";
import PageContainer from "../../components/common/PageContainer";

export default function ChatsPage() {
  const navigate = useNavigate();
  const chats = [];

  return (
    <PageContainer>
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Typography variant="h4" fontWeight={600}>
          Chats
        </Typography>

        <Button variant="contained">
          New Chat
        </Button>
      </Stack>

      <Paper sx={{ display: "flex", height: "75vh" }}>
        <ChatSidebar
          chats={chats}
          onSelect={(chatId) => navigate(`/chats/${chatId}`)}
        />
      </Paper>
    </PageContainer>
  );
}