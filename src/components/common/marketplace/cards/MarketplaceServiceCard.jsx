import {
  Avatar,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import MarketplaceCardContent from "../marketplaceCardContent/MarketplaceCardContent";
import MarketplaceCardShell from "../marketplaceCardShell/MarketPlaceCardShell";
import MetaRow from "../metaRow/MetaRow";
import PriceBadge from "../PriceBadge";
import RatingBadge from "../RatingBadge";
import StatusChip from "../StatusChip";

export default function MarketplaceServiceCard({ service }) {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate(`/book/${service._id}/${service.provider?._id}`);
  };

  const handleProviderClick = () => {
    if (service?.provider?._id) {
      navigate(`/provider/${service.provider._id}`);
    }
  };

  return (
    <MarketplaceCardShell
      sx={{
        maxWidth: "100%",
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
        {/* PROVIDER (CLICKABLE) */}
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
            src={service.providerAvatar}
            sx={{
              width: 36,
              height: 36,
              border: "1px solid",
              borderColor: "divider",
            }}
          />

          <Typography
            variant="body2"
            fontWeight={600}
            noWrap
          >
            {service.providerName || "Provider"}
          </Typography>
        </Stack>

        {/* SERVICE DESCRIPTION */}
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

        {/* SERVICE META */}
        <MetaRow
          sx={{
            mt: 2,
            justifyContent: "space-between",
          }}
        >
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

          {/* BEAUTIFUL BOOK BUTTON */}
          <Button
            onClick={handleBook}
            size="small"
            sx={{
              px: 2.5,
              py: 0.8,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              fontSize: 12,
              color: "white",
              background:
                "linear-gradient(135deg, #2563eb, #1d4ed8)",
              boxShadow: "0px 4px 12px rgba(37,99,235,0.25)",
              "&:hover": {
                background:
                  "linear-gradient(135deg, #1d4ed8, #1e40af)",
                boxShadow: "0px 6px 16px rgba(37,99,235,0.35)",
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