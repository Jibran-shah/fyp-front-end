import { Typography, Stack, Button } from "@mui/material";

import CartItemCard from "./CartItemCard";
import EmptyCart from "./EmptyCart";

import PageContainer from "../../components/common/PageContainer";
import SummaryCard from "../../components/common/SummaryCard";

export default function CartPage() {
  const cart = {
    items: [],
    subtotal: 0
  };

  if (!cart.items.length) {
    return <EmptyCart />;
  }

  return (
    <PageContainer>
      <Typography variant="h4" fontWeight={600} mb={3}>
        My Cart
      </Typography>

      <Stack spacing={2}>
        {cart.items.map((item, idx) => (
          <CartItemCard key={idx} item={item} />
        ))}
      </Stack>

      <SummaryCard>
        <Typography>
          Subtotal: Rs. {cart.subtotal}
        </Typography>

        <Button variant="contained">
          Checkout
        </Button>
      </SummaryCard>
    </PageContainer>
  );
}