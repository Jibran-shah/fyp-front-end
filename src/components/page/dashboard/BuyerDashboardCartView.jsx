import { Typography, Stack, Button } from "@mui/material";

import SummaryCard from "../../common/SummaryCard";
import EmptyCart from "../cart/EmptyCart";
import CartItemCard from "../cart/CartItemCard";

import {
  useClearCart,
  useCart,
} from "../../../hooks/api/cart/cart.hooks";

import { useCheckout } from "../../../hooks/api/checkout/useCheckout";

export default function BuyerCartDashboardView() {
  const { data: cart, isLoading } = useCart();

  const { mutate: clearCart } = useClearCart();

  const {
    mutate: checkout,
    isPending,
  } = useCheckout();

  if (isLoading) {
    return <Typography>Loading cart...</Typography>;
  }

  if (!cart?.items?.length) {
    return <EmptyCart />;
  }

  return (
    <Stack spacing={3}>
      <Typography variant="h5" fontWeight={600}>
        My Cart
      </Typography>

      <Stack spacing={2}>
        {cart.items.map((item) => (
          <CartItemCard
            key={item.product}
            item={item}
          />
        ))}
      </Stack>

      <SummaryCard>
        <Typography>
          Subtotal: Rs. {cart.subtotal}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          mt={2}
        >
          <Button
            variant="outlined"
            onClick={() => clearCart()}
          >
            Clear Cart
          </Button>

          <Button
            variant="contained"
            onClick={() => checkout()}
            disabled={isPending}
          >
            Checkout
          </Button>
        </Stack>
      </SummaryCard>
    </Stack>
  );
}