import { Card, CardContent, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import RatingBadge from "../../common/marketplace/RatingBadge";
import PriceBadge from "../../common/marketplace/PriceBadge";
import StatusChip from "../../common/marketplace/StatusChip";


export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ p: 2 }}>
      <CardContent>

        <Stack spacing={1}>
          <Typography fontWeight={600}>
            {product.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {product.categoryPath}
          </Typography>

          <PriceBadge price={product.price} />

          <RatingBadge rating={product.ratingAverage} />

          <StatusChip status={product.status} />

          <Typography variant="caption">
            Stock: {product.quantityAvailable}
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate(`/products/${product._id}`)}
          >
            View
          </Button>
        </Stack>

      </CardContent>
    </Card>
  );
}