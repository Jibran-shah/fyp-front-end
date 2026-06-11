import { Avatar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UserAvatarButton({
  avatar,
  route = "/profile",
}) {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate(route)} sx={{ ml: "auto" }}>
      <Avatar
        src={avatar}
        sx={{ width: 34, height: 34 }}
      />
    </IconButton>
  );
}