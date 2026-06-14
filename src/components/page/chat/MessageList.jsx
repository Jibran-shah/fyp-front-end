import { useEffect, useRef } from "react";
import { Stack, Typography, CircularProgress } from "@mui/material";
import MessageBubble from "./MessageBubble";

export default function MessageList({
  messages = [],
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}) {
  const topRef = useRef(null);      // 👈 for infinite scroll (load older)
  const bottomRef = useRef(null);   // 👈 for auto scroll

  /* =========================
     LOAD MORE (OLDER MESSAGES)
  ========================= */
  useEffect(() => {
    if (!topRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage?.();
        }
      },
      { threshold: 1 }
    );

    observer.observe(topRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  /* =========================
     AUTO SCROLL TO BOTTOM
  ========================= */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!messages.length) {
    return <Typography sx={{ p: 2 }}>No messages yet</Typography>;
  }

  return (
    <Stack spacing={2} sx={{ flex: 1, p: 2, overflowY: "auto" }}>

      {/* 👇 LOAD MORE TRIGGER (TOP) */}
      <div ref={topRef} />

      {/* messages */}
      {messages.map((msg) => (
        <MessageBubble key={msg._id || msg.tempId} message={msg} />
      ))}

      {/* 👇 AUTO SCROLL TARGET (BOTTOM) */}
      <div ref={bottomRef} />

      {/* loader */}
      {isFetchingNextPage && (
        <Stack alignItems="center">
          <CircularProgress size={20} />
        </Stack>
      )}
    </Stack>
  );
}