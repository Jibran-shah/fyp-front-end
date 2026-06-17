import React, { useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";

import { useCreateReport } from "../../hooks/reports/useReports";

/**
 * Props:
 * entityId: string
 * entityType: "User" | "Product" | "Post" | "Comment" | "Message"
 * onSuccess?: (response) => void
 */
const ReportForm = ({
  entityId,
  entityType,
  onSuccess,
}) => {
  const createReportMutation = useCreateReport();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: "",
    },
  });

  useEffect(() => {
    if (createReportMutation.isSuccess) {
      reset();

      if (onSuccess) {
        onSuccess(createReportMutation.data);
      }
    }
  }, [
    createReportMutation.isSuccess,
    createReportMutation.data,
    reset,
    onSuccess,
  ]);

  const onSubmit = (values) => {
    createReportMutation.mutate({
      entityId,
      entityType,
      description: values.description,
    });
  };

  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        width: "100%",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h6">
          Report {entityType}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Please explain why you are reporting
          this content.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack spacing={2}>
            <TextField
              label="Description"
              multiline
              rows={5}
              fullWidth
              error={!!errors.description}
              helperText={
                errors.description?.message
              }
              {...register("description", {
                required:
                  "Description is required",
                minLength: {
                  value: 5,
                  message:
                    "Description must be at least 5 characters",
                },
                maxLength: {
                  value: 2000,
                  message:
                    "Description cannot exceed 2000 characters",
                },
              })}
            />

            {createReportMutation.error && (
              <Typography
                color="error"
                variant="body2"
              >
                {createReportMutation.error
                  ?.response?.data?.message ||
                  "Failed to submit report"}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              disabled={
                createReportMutation.isPending
              }
            >
              {createReportMutation.isPending ? (
                <CircularProgress
                  size={22}
                  color="inherit"
                />
              ) : (
                "Submit Report"
              )}
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Paper>
  );
};

export default ReportForm;