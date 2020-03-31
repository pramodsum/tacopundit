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
import firebase from "firebase/app";

import { Review } from "../../utils/types";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./ReviewList.css";

interface IProps {
  recipeName: string;
  onReviewSave: (
    commenterName: string,
    stars: number,
    review: string
  ) => Promise<firebase.database.Reference>;
}

const ReviewsList: React.FC<IProps> = ({ recipeName, onReviewSave }) => {
  const [reviews, setReviews] = React.useState<Array<Review>>([]);
  const reviewsTable: firebase.database.Reference = firebase
    .database()
    .ref("reviews");

  React.useEffect(() => {
    if (!recipeName) return;

    let reviews: Array<Review> = [];
    reviewsTable
      .orderByChild("recipe_name")
      .equalTo(recipeName)
      .once("value")
      .then(data => {
        data.forEach(childNode => {
          const row = childNode.val();
          const review: Review = {
            recipeName: row["recipe_name"],
            commenterName: row["commenter_name"],
            text: row["text"],
            stars: row["stars"]
          };
          reviews.unshift(review);
        });

        setReviews(reviews);
      });
  }, [reviewsTable, recipeName, onReviewSave]);

  return (
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
            {reviews.map((review: Review) => (
              <ReviewItem key={review.commenterName} {...review} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ReviewsList;
