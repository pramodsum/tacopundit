import React from "react";
import {
  Box,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

import { Review } from "../../utils/types";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./ReviewList.css";

type IProps = {
  reviews: Array<Review>;
};

const ReviewsList: React.FC<IProps> = ({ reviews }) => (
  <Box className="review-list-wrapper">
    <Typography variant="h6">Reviews</Typography>
    <TableContainer>
      <Table>
        <colgroup>
          <col className="review-list-col-20" />
          <col className="review-list-col-20" />
          <col className="review-list-col-60" />
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Stars</TableCell>
            <TableCell>Review</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews &&
            reviews.map((review: Review) => (
              <ReviewItem key={review.commenterName} {...review} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default ReviewsList;
