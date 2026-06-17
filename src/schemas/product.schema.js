import { z } from "zod";

/* =========================
   FILE SCHEMA
========================= */
const fileSchema = z
  .union([
    z.array(z.instanceof(File)),
    z.instanceof(FileList),
  ])
  .transform((val) => Array.from(val))
  .refine((files) => files.length <= 10, {
    message: "Maximum 10 files allowed",
  });

/* =========================
   CREATE FILE SCHEMA
   Requires at least 1 image
========================= */
const createFileSchema = fileSchema.refine(
  (files) => files.length >= 1,
  {
    message: "At least 1 image is required",
  }
);

/* =========================
   BASE PRODUCT SCHEMA
========================= */
const baseProductSchema = z.object({
  name: z.string().min(2).max(100),

  description: z.string().min(5).max(1000),

  price: z.coerce.number().min(0),

  quantityAvailable: z.coerce.number().min(0),

  category: z.string().min(1, "Category is required")
});

/* =========================
   CREATE PRODUCT SCHEMA
========================= */
export const createProductSchema =
  baseProductSchema.extend({
    images: createFileSchema,
  });

/* =========================
   EDIT PRODUCT SCHEMA
========================= */
export const updateProductSchema =
  baseProductSchema.extend({
    // New uploaded images
    images: fileSchema.optional().default([]),

    // Remaining existing image IDs
    imageIds: z.array(z.string()).default([]),

    // UI-only field (not sent to backend)
    oldImages: z
      .array(
        z.object({
          id: z.string(),
          name: z.string().optional(),
          url: z.string().optional(),
        })
      )
      .optional()
      .default([]),
  });