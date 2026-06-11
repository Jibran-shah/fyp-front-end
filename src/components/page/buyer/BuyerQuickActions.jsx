import { Paper, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ActionButton } from "../../common/ActionButton";
import ChatIcon from "@mui/icons-material/Chat";

export default function BuyerQuickActions() {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
      }}
    >
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <ActionButton
          label="Browse Products"
          onClick={() => navigate("/products")}
        />

        <ActionButton
          label="My Cart"
          onClick={() => navigate("/cart")}
        />

        <ActionButton
          label="My Orders"
          onClick={() => navigate("/buyer/orders")}
        />

        <ActionButton
          label="Chats"
          icon={<ChatIcon />}
          onClick={() => navigate("/chats")}
        />

        <ActionButton
          label="Profile"
          onClick={() => navigate("/profile")}
        />
      </Stack>
    </Paper>
  );
}