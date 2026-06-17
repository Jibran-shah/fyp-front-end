import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Stack,
  Chip,
  Divider,
  Box,
  Avatar,
  Tooltip,
  IconButton,
} from "@mui/material";

import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const STATUS_COLORS = {
  PENDING: "warning",
  REVIEWED: "info",
  RESOLVED: "success",
  REJECTED: "error",
};

const ENTITY_COLORS = {
  User: "primary",
  Product: "secondary",
  Post: "success",
  Comment: "warning",
  Message: "info",
};

const ReportCard = ({
  entityType,
  entityId,
  description,

  status = "PENDING",

  reporter,
  createdAt,

  actions,
}) => {
  const handleCopyId = () => {
    navigator.clipboard.writeText(entityId);
  };

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        overflow: "hidden",
        transition: "0.25s",

        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: 2.5,
          py: 2,
          background:
            "linear-gradient(135deg, rgba(25,118,210,.08), rgba(156,39,176,.08))",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar
              sx={{
                bgcolor: "error.main",
              }}
            >
              <ReportProblemOutlinedIcon />
            </Avatar>

            <Box>
              <Typography variant="h6" fontWeight={700}>
                Report
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                Moderation entry
              </Typography>
            </Box>
          </Stack>

          <Chip
            label={status}
            color={STATUS_COLORS[status] || "default"}
          />
        </Stack>
      </Box>

      <CardContent>
        <Stack spacing={2}>
          {/* Entity Type */}
          <Stack direction="row" spacing={1}>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Entity:
            </Typography>

            <Chip
              size="small"
              label={entityType}
              color={
                ENTITY_COLORS[entityType] || "default"
              }
            />
          </Stack>

          {/* Entity ID */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <Typography
              variant="body2"
              color="text.secondary"
            >
              ID:
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontFamily: "monospace",
                flex: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {entityId}
            </Typography>

            <Tooltip title="Copy ID">
              <IconButton
                size="small"
                onClick={handleCopyId}
              >
                <ContentCopyOutlinedIcon
                  fontSize="small"
                />
              </IconButton>
            </Tooltip>
          </Stack>

          <Divider />

          {/* Description */}
          <Box>
            <Typography
              variant="subtitle2"
              gutterBottom
            >
              Report Details
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                whiteSpace: "pre-wrap",
              }}
            >
              {description}
            </Typography>
          </Box>

          {(reporter || createdAt) && (
            <>
              <Divider />

              <Stack
                direction="row"
                justifyContent="space-between"
                flexWrap="wrap"
                gap={1}
              >
                {reporter && (
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <PersonOutlineIcon
                      fontSize="small"
                      color="action"
                    />

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {reporter}
                    </Typography>
                  </Stack>
                )}

                {createdAt && (
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <AccessTimeOutlinedIcon
                      fontSize="small"
                      color="action"
                    />

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {new Date(
                        createdAt
                      ).toLocaleString()}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </>
          )}
        </Stack>
      </CardContent>

      {actions && (
        <>
          <Divider />
          <CardActions
            sx={{
              p: 2,
            }}
          >
            {actions}
          </CardActions>
        </>
      )}
    </Card>
  );
};

export default ReportCard;