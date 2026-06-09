import { Card, CardContent, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import RatingBadge from "../../common/marketplace/RatingBadge";
import PriceBadge from "../../common/marketplace/PriceBadge";
import StatusChip from "../../common/marketplace/StatusChip";

export default function ServiceCard({ service }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ p: 2 }}>
      <CardContent>

        <Stack spacing={1}>
          <Typography fontWeight={600}>
            {service.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {service.categoryPath}
          </Typography>

          <PriceBadge price={service.price} />

          <RatingBadge rating={service.ratingAverage} />

          <StatusChip status={service.status} />

          <Typography variant="caption">
            Duration: {service.durationHours}h
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate(`/services/${service._id}`)}
          >
            View
          </Button>
        </Stack>

      </CardContent>
    </Card>
  );
}