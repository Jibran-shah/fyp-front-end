import { Typography, Stack, Button } from "@mui/material";

import SummaryCard from "../../components/common/SummaryCard"
import PageContainer from "../../components/common/layout/pageContainer/PageContainer"
import EmptyCart from "../../components/page/cart/EmptyCart"
import CartItemCard from "../../components/page/cart/CartItemCard"
import { useCart } from "../../hooks/api/cart/useCart";
import { useClearCart } from "../../hooks/api/cart/useClearCart";

export default function CartPage() {
  const { data: cart, isLoading } = useCart();
  const { mutate: clearCart } = useClearCart();

  if (isLoading) return null;

  if (!cart?.items?.length) {
    return <EmptyCart />;
  }

  return (
    <PageContainer>
      <Typography variant="h4" fontWeight={600} mb={3}>
        My Cart
      </Typography>

      <Stack spacing={2}>
        {cart.items.map((item) => (
          <CartItemCard key={item._id} item={item} />
        ))}
      </Stack>

      <SummaryCard>
        <Typography>
          Subtotal: Rs. {cart.subtotal}
        </Typography>

        <Stack direction="row" spacing={2} mt={2}>
          <Button
            variant="outlined"
            onClick={() => clearCart()}
          >
            Clear Cart
          </Button>

          <Button variant="contained">
            Checkout
          </Button>
        </Stack>
      </SummaryCard>
    </PageContainer>
  );
}