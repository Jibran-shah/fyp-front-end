import {
  Paper,
  Stack,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
  Popover,
  Box,
} from "@mui/material";

import { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

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
      page: 1, // reset pagination on filter change
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
      <Stack direction="row" spacing={1.2} alignItems="center">

        {/* SEARCH (optional) */}
        {config.search !== false && (
          <TextField
            size="small"
            placeholder={config.searchPlaceholder || "Search..."}
            value={filters.search || ""}
            onChange={(e) => update("search", e.target.value)}
            sx={{ flex: 1.4, minWidth: 180 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        )}

        {/* CATEGORY (optional) */}
        {config.categories && (
          <TextField
            select
            size="small"
            label={config.categoryLabel || "Category"}
            value={filters.category || ""}
            onChange={(e) => update("category", e.target.value)}
            sx={{ minWidth: 140 }}
          >
            <MenuItem value="">All</MenuItem>
            {config.categories.map((c) => (
              <MenuItem key={c.value} value={c.value}>
                {c.label}
              </MenuItem>
            ))}
          </TextField>
        )}

        {/* MIN PRICE (optional) */}
        {config.price !== false && (
          <TextField
            size="small"
            label="Min"
            type="number"
            value={filters.minPrice || ""}
            onChange={(e) => update("minPrice", e.target.value)}
            sx={{ width: 100 }}
          />
        )}

        {/* MAX PRICE */}
        {config.price !== false && (
          <TextField
            size="small"
            label="Max"
            type="number"
            value={filters.maxPrice || ""}
            onChange={(e) => update("maxPrice", e.target.value)}
            sx={{ width: 100 }}
          />
        )}

        {/* SORT (generic backend-safe) */}
        <TextField
          select
          size="small"
          label="Sort"
          value={filters.sort || ""}
          onChange={(e) => update("sort", e.target.value)}
          sx={{ minWidth: 160 }}
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
        >
          More
        </Button>
      </Stack>

      {/* EXTENSIBLE POPOVER */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Box sx={{ p: 2, width: 240 }}>
          {config.extraFilters?.map((field) => (
            <TextField
              key={field.key}
              fullWidth
              size="small"
              select={field.type === "select"}
              label={field.label}
              value={filters[field.key] || ""}
              onChange={(e) =>
                update(field.key, e.target.value)
              }
              sx={{ mb: 1.5 }}
            >
              {field.options?.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </TextField>
          ))}
        </Box>
      </Popover>
    </Paper>
  );
}