import { Paper, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ChatSidebar from "../../components/page/chat/ChatSidebar";
import PageContainer from "../../components/common/layout/pageContainer/PageContainer";
import { useGetUserDirectChats } from "../../hooks/api/directChats/directChats.hooks";
import ChatContainer from "../../components/page/chat/ChatContainer";
import MasterDetailLayout from "../../components/common/layout/master-detail/MasterDetailLayout";

// redux action (adjust path to your store)
import { setSelectedChat } from "../../store/slices/chat.slice";

export default function ChatsPage() {
  const dispatch = useDispatch();

  // 🔥 GET FROM REDUX
  const selectedChatFromStore = useSelector(
    (state) => state.chat.selectedChat
  );

  const [chat, setChat] = useState(selectedChatFromStore || null);

  const { data: chats, isLoading, error } = useGetUserDirectChats();

  // 🔥 SYNC REDUX → LOCAL STATE ON MOUNT
  useEffect(() => {
    if (selectedChatFromStore) {
      setChat(selectedChatFromStore);
    }
  }, [selectedChatFromStore]);

  const handleSelectChat = (selectedChat) => {
    setChat(selectedChat);

    // 🔥 SAVE TO REDUX
    dispatch(setSelectedChat(selectedChat));
  };

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
        <Typography color="error">
          Failed to load chats
        </Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
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
        <MasterDetailLayout
          hasSelection={!!chat}
          sidebar={(openMain) => (
            <ChatSidebar
              chats={chats?.data || []}
              activeChatId={chat?._id || chat?.id}
              onSelectChat={(selectedChat) => {
                handleSelectChat(selectedChat);
                openMain();
              }}
            />
          )}
          main={
            chat ? (
              <ChatContainer
                chat={chat}
                chatId={chat._id || chat.id}
              />
            ) : (
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 2,
                  color: "text.secondary",
                }}
              >
                <Typography variant="h6">
                  Select a chat
                </Typography>

                <Typography variant="body2">
                  Choose a conversation from the sidebar to start messaging.
                </Typography>
              </Box>
            )
          }
        />
      </Paper>
    </PageContainer>
  );
}