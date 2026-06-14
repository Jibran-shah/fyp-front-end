import { toast } from "react-toastify";

export const handleAppNewMessage = (message) => {
  console.log("[app.handler] new message:", message);

  const sender = message?.sender?.name || "Someone";
  const text =
    message?.text?.length > 40
      ? message.text.slice(0, 40) + "..."
      : message?.text || "New message";

  toast.info(`💬 ${sender}: ${text}`);
};

