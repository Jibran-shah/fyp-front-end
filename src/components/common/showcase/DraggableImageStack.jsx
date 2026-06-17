import React, { useState } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import { STACK } from "./showcase.styles";
import { rotateImages, isSwipeValid } from "../../../utils/imageStack.utils";

export default function DraggableImageStack({ images = [] }) {
  const [stack, setStack] = useState(images);

  const handleDragEnd = (event, info) => {
    const offsetX = info.offset.x;

    if (isSwipeValid(offsetX)) {
      setStack((prev) => rotateImages(prev));
    }
  };

  if (!stack.length) return null;

  return (
    <Box
      sx={{
        width: STACK.width,
        height: STACK.height,
        position: "relative",
        margin: "0 auto",
      }}
    >
      <AnimatePresence>
        {stack.map((img, index) => {
          const isTop = index === 0;

          return (
            <motion.div
              key={img.id}
              drag={isTop ? "x" : false}
              onDragEnd={handleDragEnd}
              layout
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: 1 - index * STACK.scaleStep,
                x: index * STACK.offset,
                y: index * STACK.offset,
                rotate: index * STACK.rotateStep,
                opacity: 1,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: 16,
                overflow: "hidden",
                zIndex: 100 - index,
                cursor: isTop ? "grab" : "default",
              }}
            >
              <img
                src={img.src}
                alt={img.title || "image"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </Box>
  );
}