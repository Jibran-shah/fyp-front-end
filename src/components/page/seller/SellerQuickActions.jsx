import { Paper, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SellerQuickActions() {
  const navigate = useNavigate();

  return (
    <Paper sx={{ p: 3 }}>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        <Button onClick={() => navigate("/products/create")}>
          Add Product
        </Button>

        <Button onClick={() => navigate("/seller/products")}>
          My Products
        </Button>

        <Button onClick={() => navigate("/seller/orders")}>
          Orders
        </Button>

        <Button onClick={() => navigate("/profile")}>
          Profile
        </Button>
      </Stack>
    </Paper>
  );
}