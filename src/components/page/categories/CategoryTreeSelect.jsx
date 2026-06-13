import { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Popover,
  CircularProgress,
  Paper,
  Button
} from "@mui/material";

import { useCategoryTree } from "../../../hooks/api/categories/categories.hooks";

/* =========================
   TREE NODE (UNCHANGED UI)
========================= */
function TreeNode({ node, level, value, onSelect }) {
  const hasChildren = node.children?.length > 0;

  const handleClick = () => {
    console.log("[TreeNode] selected:", node._id);
    onSelect(node._id); // IMPORTANT: only return ID
  };

  return (
    <Box sx={{ pl: level * 2 }}>
      <Box
        onClick={handleClick}
        sx={{
          cursor: "pointer",
          py: 0.5,
          px: 1,
          borderRadius: 1,
          bgcolor: value === node._id ? "primary.light" : "transparent",
          color: value === node._id ? "primary.contrastText" : "text.primary",
          "&:hover": { bgcolor: "action.hover" }
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
   MAIN COMPONENT (RHF SAFE)
========================= */
export default function CategoryTreeSelect({
  value,
  onChange,
  label = "Category"
}) {
  const { data: tree, isLoading, isError } = useCategoryTree();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // =========================
  // OPTIMIZED LABEL RESOLUTION (NO RECURSION EACH RENDER)
  // =========================
  const selectedLabel = useMemo(() => {
    if (!tree || !value) return "";

    const stack = [...tree];

    while (stack.length) {
      const node = stack.pop();

      if (node._id === value) return node.name;

      if (node.children) {
        stack.push(...node.children);
      }
    }

    return "";
  }, [tree, value]);

  // =========================
  // HANDLERS
  // =========================
  const handleOpen = (e) => {
    console.log("[CategoryTreeSelect] open");
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    console.log("[CategoryTreeSelect] close");
    setAnchorEl(null);
  };

  const handleSelect = (id) => {
    console.log("[CategoryTreeSelect] selected:", id);
    onChange?.(id); // RHF-compatible
    setAnchorEl(null);
  };

  return (
    <>
      {/* INPUT BOX */}
      <Paper
        onClick={handleOpen}
        sx={{
          p: 1.5,
          cursor: "pointer",
          border: "1px solid #ddd",
          "&:hover": { borderColor: "primary.main" }
        }}
      >
        <Typography variant="caption" color="text.secondary">
          {label}
        </Typography>

        <Typography>
          {selectedLabel || "Select category"}
        </Typography>
      </Paper>

      {/* POPUP */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <Box sx={{ width: 300, maxHeight: 400, overflow: "auto", p: 1 }}>
          {isLoading && (
            <Box display="flex" gap={1} alignItems="center">
              <CircularProgress size={18} />
              Loading...
            </Box>
          )}

          {isError && (
            <Typography color="error">
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
            <Typography>No categories found</Typography>
          )}

          <Box mt={1}>
            <Button fullWidth size="small" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
}