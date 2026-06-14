import { useState } from "react";
import { Stack, Pagination } from "@mui/material";

import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import { useEntityReviews } from "../../../hooks/api/reviews/reviews.hooks";

export default function ReviewBox({
  entityType,
  entityId,
}) {
  const [page, setPage] = useState(1);

  const filters = {
    page,
    limit: 10,
    sort: "-createdAt",
  };

  const { data, isLoading } = useEntityReviews(
    entityType,
    entityId,
    filters
  );

  const myReview = data?.data?.own;

  const others = data?.data?.others || [];

  const totalPages =
    data?.data?.pages ||
    Math.ceil((data?.data?.total || 0) / filters.limit) ||
    1;

  return (
    <Stack spacing={2}>
      <ReviewForm
        entityType={entityType}
        entityId={entityId}
        myReview={myReview}
      />

      <ReviewList
        reviews={others}
        loading={isLoading}
      />

      {totalPages > 1 && (
        <Pagination
          page={page}
          count={totalPages}
          onChange={(_, value) => {
            setPage(value);
          }}
        />
      )}
    </Stack>
  );
}