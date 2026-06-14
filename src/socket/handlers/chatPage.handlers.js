import { queryClient } from "../../utils/queryCient";
import { queryKeys } from "../../utils/queryKeys";

export const handleNewMessage = (message) => {
  console.log("📩 [handleNewMessage] Received message:", message);

  const chatId = message?.roomId || message?.chatId;

  if (!chatId) {
    console.warn("⚠️ [handleNewMessage] Missing chatId:", message);
    return;
  }

  const queryKey = queryKeys.messages.chat(chatId);

  console.log("🔑 [handleNewMessage] Query key:", queryKey);

  queryClient.setQueryData(queryKey, (old) => {
    console.log("📦 [handleNewMessage] Current cache:", old);

    if (!old?.pages?.length) {
      console.warn(
        "⚠️ [handleNewMessage] No pages found in cache for chat:",
        chatId
      );
      return old;
    }

    let inserted = false;

    const updatedPages = old.pages.map((page, pageIndex) => {
      console.log(
        `📄 [handleNewMessage] Processing page ${pageIndex} with ${
          page.messages?.length || 0
        } messages`
      );

      const exists = page.messages?.some((m) => {
        const duplicate =
          m._id === message._id ||
          (message.tempId && m.tempId === message.tempId);

        if (duplicate) {
          console.log(
            "♻️ [handleNewMessage] Duplicate detected:",
            {
              existing: m,
              incoming: message,
            }
          );
        }

        return duplicate;
      });

      if (exists) {
        return page;
      }

      if (!inserted) {
        inserted = true;

        const newMessages = [...(page.messages || []), message];

        console.log(
          `✅ [handleNewMessage] Message inserted into page ${pageIndex}`
        );
        console.log(
          "📑 [handleNewMessage] Message order after insert:"
        );
        console.table(
          newMessages.map((m) => ({
            id: m._id || m.tempId,
            text: m.text,
            createdAt: m.createdAt,
          }))
        );

        return {
          ...page,
          messages: newMessages,
        };
      }

      return page;
    });

    const updated = {
      ...old,
      pages: updatedPages,
    };

    console.log("💾 [handleNewMessage] Cache updated");

    return updated;
  });
};


/* =========================================================
   DELIVERED HANDLER
========================================================= */

export const handleDelivered = (data) => {
  console.log("[chat.handler] delivered event:", data);

  // TODO (future):
  // update message status in cache
  // e.g. mark message as "delivered"
};

/* =========================================================
   READ HANDLER
========================================================= */

export const handleRead = (data) => {
  console.log("[chat.handler] read event:", data);

  // TODO (future):
  // update message status as "read"
};

/* =========================================================
   TYPING START
========================================================= */

export const handleTypingStart = (data) => {
  console.log("[chat.handler] typing start:", data);

  // TODO (future):
  // set typing indicator in cache
};

/* =========================================================
   TYPING STOP
========================================================= */

export const handleTypingStop = (data) => {
  console.log("[chat.handler] typing stop:", data);

  // TODO (future):
  // remove typing indicator from UI
};


console.log({
  handleNewMessage,
  handleDelivered,
  handleRead,
  handleTypingStart,
  handleTypingStop,
});