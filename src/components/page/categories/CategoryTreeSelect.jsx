import { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Popover,
  CircularProgress,
  Paper,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CategoryIcon from "@mui/icons-material/Category";
import CloseIcon from "@mui/icons-material/Close";

import { useCategoryTree } from "../../../hooks/api/categories/categories.hooks";

/* =========================
   TREE NODE
========================= */
function TreeNode({ node, level, value, onSelect }) {
  const hasChildren = node.children?.length > 0;

  return (
    <Box sx={{ pl: level * 2 }}>
      <Box
        onClick={() => onSelect(node._id)}
        sx={{
          cursor: "pointer",
          py: 0.4,
          px: 1,
          borderRadius: 1,
          fontSize: 14,
          bgcolor: value === node._id ? "primary.light" : "transparent",
          color: value === node._id ? "primary.contrastText" : "text.primary",
          "&:hover": { bgcolor: "action.hover" },
        }}
      >
        {node.name}
      </Box>

      {hasChildren &&
        node.children.map((child) => (
          <TreeNode
            key={child._id}
            node={child}
            level={level + 1}
            value={value}
            onSelect={onSelect}
          />
        ))}
    </Box>
  );
}

/* =========================
   MAIN COMPONENT
========================= */
export default function CategoryTreeSelect({
  value,
  onChange,
  label = "Category",
  disabled = false,
}) {
  const { data: tree, isLoading, isError } = useCategoryTree();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  /* =========================
     FIND LABEL FROM ID
  ========================= */
  const selectedLabel = useMemo(() => {
    if (!tree || !value) return "";

    const stack = [...tree];

    while (stack.length) {
      const node = stack.pop();
      if (node._id === value) return node.name;
      if (node.children) stack.push(...node.children);
    }

    return "";
  }, [tree, value]);

  /* =========================
     SELECT HANDLER
  ========================= */
  const handleSelect = (id) => {
    onChange?.(id);
    setAnchorEl(null);
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange?.("");
  };

  return (
    <>
      {/* INPUT */}
      <Paper
        onClick={(e) => !disabled && setAnchorEl(e.currentTarget)}
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 40,
          px: 1.2,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1.5,
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.6 : 1,
          transition: "all 0.15s ease",
          "&:hover": {
            borderColor: disabled ? "divider" : "primary.main",
          },
        }}
      >
        <InputAdornment position="start" sx={{ mr: 0.5 }}>
          <CategoryIcon fontSize="small" />
        </InputAdornment>

        {/* TEXT */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              color: "text.secondary",
              lineHeight: 1,
            }}
          >
            {label}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              lineHeight: 1.2,
            }}
          >
            {selectedLabel || "Select category"}
          </Typography>
        </Box>

        {/* CLEAR BUTTON */}
        {value && !disabled && (
          <IconButton size="small" onClick={handleClear}>
            <CloseIcon fontSize="small" />
          </IconButton>
        )}

        <ArrowDropDownIcon fontSize="small" />
      </Paper>

      {/* POPOVER */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 320, maxHeight: 360, overflow: "auto", p: 1 }}>
          {isLoading && (
            <Box display="flex" gap={1} alignItems="center" p={1}>
              <CircularProgress size={18} />
              <Typography variant="body2">Loading...</Typography>
            </Box>
          )}

          {isError && (
            <Typography color="error" p={1}>
              Failed to load categories
            </Typography>
          )}

          {!isLoading &&
            !isError &&
            tree?.map((node) => (
              <TreeNode
                key={node._id}
                node={node}
                level={0}
                value={value}
                onSelect={handleSelect}
              />
            ))}

          {!isLoading && !isError && (!tree || tree.length === 0) && (
            <Typography p={1}>No categories found</Typography>
          )}

          <Box mt={1}>
            <Button fullWidth size="small" onClick={() => setAnchorEl(null)}>
              Close
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
}