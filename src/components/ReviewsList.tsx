import React from "react";

import {
  Box,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';

import { Review } from "../routes/ItemDetailsPage";

type IProps = {
  reviews: Array<Review>;
}

const ReviewsList: React.FC<IProps> = (props: IProps) => {
  const { reviews } = props;
  return (
    <Box style={{ paddingTop: "50px"}} >
      <Typography variant="h6">Reviews</Typography>
      <TableContainer>
        <Table aria-label="simple table">
          <colgroup>
            <col style={{width:'20%'}}/>
            <col style={{width:'20%'}}/>
            <col style={{width:'60%'}}/>
          </colgroup>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Stars</TableCell>
              <TableCell>Review</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { reviews &&
              reviews.map((review: Review) => (
                <TableRow key={review.commenterName}>
                  <TableCell align="left">{review.commenterName}</TableCell>
                  <TableCell align="left">
                    <Rating name="read-only" value={review.stars} readOnly />
                  </TableCell>
                  <TableCell align="left">{review.text}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ReviewsList;