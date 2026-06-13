import { useNavigate } from "react-router-dom";
import { useAddToCart } from "../../api/cart/useAddToCart";


export function useMarketplaceProductActions() {
  const navigate = useNavigate();
  const addToCartMutation = useAddToCart();

  const handleCardClick = (product) => {
    console.log(product)
    navigate(`/products/${product._id}`);
  };

  const handleAddToCart = (product) => {
    console.log("add to cart:", product);

    addToCartMutation.mutate({
      productId: product._id,
      quantity: 1
    });
  };

  return {
    handleCardClick,
    handleAddToCart,
    isAddingToCart: addToCartMutation.isPending
  };
}