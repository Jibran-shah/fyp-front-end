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

import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function MarketplaceFilters() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <Paper sx={{ p: 1.5 }}>
      <Stack direction="row" spacing={1.2} alignItems="center">

        {/* SEARCH */}
        <TextField
          size="small"
          placeholder="Search products..."
          sx={{ flex: 1.4, minWidth: 180 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        {/* CATEGORY */}
        <TextField
          select
          size="small"
          label="Category"
          sx={{ flex: 1, minWidth: 140 }}
          defaultValue=""
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="fashion">Fashion</MenuItem>
          <MenuItem value="home">Home</MenuItem>
        </TextField>

        {/* MIN PRICE */}
        <TextField
          size="small"
          label="Min Price"
          type="number"
          sx={{ width: 120 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyIcon
                  fontSize="small"
                  sx={{ color: "text.secondary" }}
                />
              </InputAdornment>
            ),
          }}
        />

        {/* MAX PRICE */}
        <TextField
          size="small"
          label="Max Price"
          type="number"
          sx={{ width: 120 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyIcon
                  fontSize="small"
                  sx={{ color: "text.secondary" }}
                />
              </InputAdornment>
            ),
          }}
        />

        {/* SORT */}
        <TextField
          select
          size="small"
          label="Sort"
          sx={{ width: 150 }}
          defaultValue="newest"
        >
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="low">Price ↑</MenuItem>
          <MenuItem value="high">Price ↓</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
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

      {/* POPOVER */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Box sx={{ p: 2, width: 220 }}>
          <TextField
            fullWidth
            size="small"
            select
            label="Availability"
            defaultValue=""
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="available">Available</MenuItem>
            <MenuItem value="sold_out">Sold Out</MenuItem>
          </TextField>
        </Box>
      </Popover>
    </Paper>
  );
}