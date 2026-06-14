import {
  Paper,
  Stack,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
  Popover,
  Box,
  Slider,
  Typography
} from "@mui/material";

import { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

import CategoryTreeSelect from "../../../page/categories/CategoryTreeSelect";

export default function FilterBar({
  filters,
  onChange,
  config = {},
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const update = (key, value) => {
    onChange({
      ...filters,
      [key]: value,
      page: 1,
    });
  };

  const sortOptions = useMemo(() => {
    return config.sortOptions || [
      { label: "Newest", value: "-createdAt" },
      { label: "Oldest", value: "createdAt" },
    ];
  }, [config.sortOptions]);

  return (
    <Paper sx={{ p: 1.5 }}>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{
          width: "100%",
          flexWrap: "nowrap",
          overflow: "hidden",
        }}
      >

        {/* SEARCH */}
        {config.search !== false && (
          <TextField
            size="small"
            placeholder={config.searchPlaceholder || "Search..."}
            value={filters.search || ""}
            onChange={(e) => update("search", e.target.value)}
            sx={{ flex: 3, minWidth: 160 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        )}

        {/* CATEGORY */}
        {config.categoryTree !== false && (
          <Box sx={{ flex: 1.4, minWidth: 160 }}>
            <CategoryTreeSelect
              value={filters.category || ""}
              onChange={(id) => update("category", id)}
              label="Category"
            />
          </Box>
        )}

        {/* SORT */}
        <TextField
          select
          size="small"
          label="Sort"
          value={filters.sort || "-createdAt"}
          onChange={(e) => update("sort", e.target.value)}
          sx={{ flex: 1.2, minWidth: 140 }}
        >
          {sortOptions.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
        </TextField>

        {/* MORE */}
        <Button
          size="small"
          variant="outlined"
          startIcon={<TuneIcon />}
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={{ flexShrink: 0, whiteSpace: "nowrap" }}
        >
          More
        </Button>
      </Stack>

      {/* POPUP */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Box sx={{ p: 2, width: 280 }}>

          {config.extraFilters?.map((field) => {

            // =========================
            // SELECT
            // =========================
            if (field.type === "select") {
              return (
                <TextField
                  key={field.key}
                  fullWidth
                  size="small"
                  select
                  label={field.label}
                  value={filters[field.key] || ""}
                  onChange={(e) => update(field.key, e.target.value)}
                  sx={{ mb: 1.5 }}
                >
                  {field.options?.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </MenuItem>
                  ))}
                </TextField>
              );
            }

            // =========================
            // SLIDER (NEW - for radius)
            // =========================
            if (field.type === "slider") {
              return (
                <Box key={field.key} sx={{ mb: 2 }}>
                  <Typography variant="caption">
                    {field.label}: {filters[field.key] || field.min}
                  </Typography>

                  <Slider
                    value={Number(filters[field.key] || field.min || 0)}
                    min={field.min || 0}
                    max={field.max || 100}
                    step={field.step || 1000}
                    onChange={(_, value) => update(field.key, value)}
                    valueLabelDisplay="auto"
                  />
                </Box>
              );
            }

            // =========================
            // NUMBER INPUT
            // =========================
            if (field.type === "number") {
              return (
                <TextField
                  key={field.key}
                  fullWidth
                  size="small"
                  type="number"
                  label={field.label}
                  value={filters[field.key] || ""}
                  onChange={(e) => update(field.key, e.target.value)}
                  sx={{ mb: 1.5 }}
                />
              );
            }

            return null;
          })}
        </Box>
      </Popover>
    </Paper>
  );
}