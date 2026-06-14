import { Typography, Stack, Button } from "@mui/material";

import SummaryCard from "../../components/common/SummaryCard"
import PageContainer from "../../components/common/layout/pageContainer/PageContainer"
import EmptyCart from "../../components/page/cart/EmptyCart"
import CartItemCard from "../../components/page/cart/CartItemCard"
import { useClearCart,useCart } from "../../hooks/api/cart/cart.hooks";

export default function CartPage() {
  const { data: cart, isLoading } = useCart();
  const { mutate: clearCart } = useClearCart();

  if (isLoading) return (<Typography>loading...</Typography>);
  if (!cart?.items?.length) {
    console.log("cart",cart)
    console.log("cart items",cart?.items)
    return <EmptyCart />;
  }

  return (
    <PageContainer>
      <Typography variant="h4" fontWeight={600} mb={3}>
        My Cart
      </Typography>

      <Stack spacing={2}>
        {cart.items.map((item) => (
          <CartItemCard key={item.product} item={item}/>
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

          <Button variant="contained" >
            Checkout
          </Button>
        </Stack>
      </SummaryCard>
    </PageContainer>
  );
}