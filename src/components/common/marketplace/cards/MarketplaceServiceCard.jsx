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
    e.stopPropagation();
    navigate(`/booking/create/${service._id}`);
  };

  const handleProviderClick = (e) => {
    e.stopPropagation();
    if (service?.provider?._id) {
      navigate(`/provider/${service.provider._id}`);
    }
  };

  return (
    <MarketplaceCardShell
      onClick={handleCardClick}
      sx={{
        cursor: "pointer",
        transition: "all 0.25s ease",
        borderRadius: 2,

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
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
            cursor: service?.provider?._id ? "pointer" : "default",
            width: "fit-content",
            borderRadius: 2,
            px: 0.6,
            py: 0.3,
            transition: "0.2s ease",

            "&:hover": {
              backgroundColor: service?.provider?._id
                ? "action.hover"
                : "transparent",
            },
          }}
        >
          <Avatar
            src={
              service?.provider?.user?.baseProfile?.profileAvatar?.file?.url
            }
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
              px: 2.2,
              py: 0.7,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              fontSize: 12,

              transition: "0.2s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            Book Service
          </Button>
        </MetaRow>
      </MarketplaceCardContent>
    </MarketplaceCardShell>
  );
}