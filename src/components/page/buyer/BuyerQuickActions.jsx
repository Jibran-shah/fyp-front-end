import { Paper, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BuyerQuickActions() {
  const navigate = useNavigate();

  return (
    <Paper sx={{ p: 3 }}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button onClick={() => navigate("/products")}>
          Browse Products
        </Button>

        <Button onClick={() => navigate("/cart")}>
          My Cart
        </Button>

        <Button onClick={() => navigate("/buyer/orders")}>
          My Orders
        </Button>

        <Button onClick={() => navigate("/profile")}>
          Profile
        </Button>
      </Stack>
    </Paper>
  );
}