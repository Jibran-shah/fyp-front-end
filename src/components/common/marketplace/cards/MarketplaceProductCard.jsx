import { Box, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import MarketplaceCardShell from "../marketplaceCardShell/MarketPlaceCardShell";
import MarketplaceCardMedia from "../marketplaceCardMedia/MarketplaceCardMedia";

import MetaRow from "../metaRow/MetaRow";
import PriceBadge from "../PriceBadge";
import RatingBadge from "../RatingBadge";
import StatusChip from "../StatusChip";

export default function MarketplaceProductCard({
  product,
  onCardClick,
  onAddToCart,
}) {
  const handleAddToCart = (e) => {
    e.stopPropagation();

    onAddToCart(product)
  };

  const handleCardClick = () => {
    onCardClick(product)
  };

  return (
    <MarketplaceCardShell
      onClick={handleCardClick}
      sx={{
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "0.2s",

        "&:hover": {
          transform: "translateY(-3px)",
        },

        "& .cart-btn": {
          opacity: 0,
          transform: "scale(0.8)",
          transition: "0.2s",
        },

        "&:hover .cart-btn": {
          opacity: 1,
          transform: "scale(1)",
        },
      }}
    >
      {/* CART BUTTON (HIDDEN BY DEFAULT) */}
      <IconButton
        className="cart-btn"
        onClick={handleAddToCart}
        size="small"
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          bgcolor: "white",
          boxShadow: 3,
          zIndex: 10,
          "&:hover": {
            bgcolor: "grey.100",
          },
        }}
      >
        <ShoppingCartIcon fontSize="small" />
      </IconButton>

      {/* IMAGE */}
      <MarketplaceCardMedia image={product.image} />

      {/* CONTENT (COMPACT) */}
      <Box sx={{ p: 1.5 }}>
        <Box
          sx={{
            fontSize: 14,
            fontWeight: 700,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.name}
        </Box>

        <MetaRow>
          <PriceBadge price={product.price} />
          <RatingBadge rating={product.ratingAverage} />
        </MetaRow>

        <Box sx={{ mt: 0.5 }}>
          <StatusChip status={product.status} />
        </Box>
      </Box>
    </MarketplaceCardShell>
  );
}