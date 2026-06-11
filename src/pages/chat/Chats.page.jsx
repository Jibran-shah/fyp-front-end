import { Paper, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ChatSidebar from "../../components/page/chat/ChatSidebar";
import PageContainer from "../../components/common/layout/pageContainer/PageContainer";
import { useGetUserDirectChats } from "../../hooks/api/directChats/useGetUserDirectChats";

export default function ChatsPage() {
  const navigate = useNavigate();

  const { data: chats, isLoading, error } = useGetUserDirectChats();

  if (isLoading) {
    return (
      <PageContainer>
        <Typography>Loading chats...</Typography>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <Typography color="error">Failed to load chats</Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {/* HEADER */}
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 3,
        }}
      >
        <Stack spacing={0.5}>
          <Typography variant="h4" fontWeight={700}>
            Chats
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Your conversations with buyers, sellers, and service providers
          </Typography>
        </Stack>
      </Paper>

      {/* SIDEBAR ONLY */}
      <Paper
        elevation={0}
        sx={{
          height: "75vh",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <ChatSidebar
          chats={chats.data || []}
          onSelect={(chatId) => navigate(`/chats/${chatId}`)}
        />
      </Paper>
    </PageContainer>
  );
}