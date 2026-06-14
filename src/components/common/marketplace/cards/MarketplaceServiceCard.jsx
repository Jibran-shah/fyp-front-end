import { Avatar, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import MarketplaceCardContent from "../marketplaceCardContent/MarketplaceCardContent";
import MarketplaceCardShell from "../marketplaceCardShell/MarketPlaceCardShell";
import MetaRow from "../metaRow/MetaRow";
import PriceBadge from "../PriceBadge";
import RatingBadge from "../RatingBadge";
import StatusChip from "../StatusChip";

export default function MarketplaceServiceCard({ service }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/services/${service._id}`);
  };

  const handleBook = (e) => {
    e.stopPropagation(); // 👈 prevents card navigation
    navigate(`/booking/create/${service._id}`);
  };

  const handleProviderClick = (e) => {
    e.stopPropagation(); // optional but recommended
    if (service?.provider?._id) {
      navigate(`/provider/${service.provider._id}`);
    }
  };

  return (
    <MarketplaceCardShell
      onClick={handleCardClick}
      sx={{
        maxWidth: "100%",
        cursor: "pointer",
        transition: "0.2s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: 4,
        },
      }}
    >
      <MarketplaceCardContent
        title={service.name}
        subtitle={service.categoryPath}
      >
        {/* PROVIDER */}
        <Stack
          direction="row"
          spacing={1.2}
          alignItems="center"
          onClick={handleProviderClick}
          sx={{
            cursor: "pointer",
            width: "fit-content",
            borderRadius: 2,
            px: 0.5,
            py: 0.3,
            transition: "0.2s",
            "&:hover": {
              backgroundColor: "action.hover",
            },
          }}
        >
          <Avatar
            src={service?.provider?.user?.baseProfile?.profileAvatar?.file?.url}
            sx={{
              width: 36,
              height: 36,
              border: "1px solid",
              borderColor: "divider",
            }}
          />

          <Typography variant="body2" fontWeight={600} noWrap>
            {service.provider?.title || "Provider"}
          </Typography>
        </Stack>

        {/* DESCRIPTION */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 1.5,
            fontSize: 13,
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {service.description ||
            "High quality professional service delivered with precision and reliability."}
        </Typography>

        {/* META */}
        <MetaRow sx={{ mt: 2, justifyContent: "space-between" }}>
          <PriceBadge price={service.price} />
          <StatusChip status={service.status} />
        </MetaRow>

        <MetaRow
          sx={{
            mt: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <RatingBadge rating={service.ratingAverage} />

          <Button
              onClick={handleBook}
              size="small"
              variant="contained"
              sx={{
                px: 2.5,
                py: 0.8,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                fontSize: 12,
              }}
            >
              Book Service
          </Button>
        </MetaRow>
      </MarketplaceCardContent>
    </MarketplaceCardShell>
  );
}