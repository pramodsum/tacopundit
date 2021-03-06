import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import { Review } from "../../utils/types";
import "./ReviewItem.css";

const ReviewItem: React.FC<Review> = review => (
  <TableRow>
    <TableCell className="review-recipe-cell">{review.commenterName}</TableCell>
    <TableCell className="review-recipe-cell">
      <Rating name="read-only" value={review.stars} readOnly />
    </TableCell>
    <TableCell className="review-recipe-cell">{review.text}</TableCell>
  </TableRow>
);

export default ReviewItem;
