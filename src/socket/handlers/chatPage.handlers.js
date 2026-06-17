import { queryClient } from "../../utils/queryCient";
import { queryKeys } from "../../utils/queryKeys";

export const handleNewMessage = (message) => {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📩 NEW MESSAGE RECEIVED:", message);

  const chatId = message?.roomId || message?.chatId;

  if (!chatId) {
    console.warn("⚠️ Missing chatId:", message);
    return;
  }

  const queryKey = queryKeys.messages.chat(chatId);

  console.log("🔑 Computed Query Key:", JSON.stringify(queryKey));

  // 🔥 PROBE 1: ALL KEYS IN CACHE
  const allQueries = queryClient.getQueryCache().getAll();

  console.log("📦 ALL QUERY KEYS IN CACHE:");
  allQueries.forEach((q, i) => {
    console.log(`  ${i}:`, JSON.stringify(q.queryKey));
  });

  const targetQuery = allQueries.find(
    (q) => JSON.stringify(q.queryKey) === JSON.stringify(queryKey)
  );

  console.log("🎯 MATCH FOUND IN CACHE:", !!targetQuery);

    queryClient.setQueryData(queryKey, (old) => {
      console.log("━━━━━━━━ CACHE BEFORE UPDATE ━━━━━━━━");
      console.log("OLD:", old);
      if (!old) {
        return {
          pages: [
            {
              messages: [message],
            },
          ],
          pageParams: [],
        };
      }

      // Check for duplicates across ALL pages
      const exists = old.pages.some((page, pageIndex) =>
        (page.messages || []).some((m, msgIndex) => {
          const sameId = m._id === message._id;
          const sameTempId =
            message.tempId && m.tempId === message.tempId;

          if (sameId || sameTempId) {
            console.log("♻️ DUPLICATE FOUND");
            console.log("Page:", pageIndex);
            console.log("Message index:", msgIndex);
            console.log("Incoming:", message);
            console.log("Existing:", m);
          }

          return sameId || sameTempId;
        })
      );

      if (exists) {
        console.log("⚠️ Message already exists in cache");
        return old;
      }

      const pages = [...old.pages];

      // Since pages are ordered oldest -> newest,
      // insert into LAST page
      const lastPageIndex = pages.length - 1;

      const lastPage = pages[lastPageIndex];

      pages[lastPageIndex] = {
        ...lastPage,
        messages: [...(lastPage.messages || []), message],
      };

      console.log("✅ Inserted into page:", lastPageIndex);
      console.log(
        "New message count:",
        pages[lastPageIndex].messages.length
      );

      return {
        ...old,
        pages,
      };
    });
  // 🔥 PROBE 2: VERIFY AFTER UPDATE
  setTimeout(() => {
    const final = queryClient.getQueryData(queryKey);

    console.log("━━━━━━━━ POST-UPDATE CHECK ━━━━━━━━");
    console.log("FINAL CACHE FROM REACT QUERY:", final);

    const totalMessages =
      final?.pages?.reduce(
        (acc, p) => acc + (p.messages?.length || 0),
        0
      ) || 0;

    console.log("📊 TOTAL MESSAGES NOW:", totalMessages);
  }, 50);
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