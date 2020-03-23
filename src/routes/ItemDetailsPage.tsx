import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {
  TextField,
  Box,
  Typography,
  Button,
} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';

import * as firebase from 'firebase/app';

import ReviewsList from "../components/ReviewsList";
import Layout from "../components/Layout/Layout";
import { TACO_API_BASE, RouteParams } from "../utils/globals";

type ItemDetails = {
  name: string;
  slug: string;
  recipe: string;
  url: string;
};

export type Review = {
  recipeName: string;
  commenterName: string;
  text: string;
  stars: number;
}

const ItemDetailsPage: React.FC<RouteComponentProps> = ({ match }) => {
  const { slug } = match.params as RouteParams;
  const [ItemDetails, setItemDetails] = React.useState<ItemDetails>();
  const [reviews, setReviews] = React.useState<Array<Review>>([]);
  const reviewsTable: firebase.database.Reference = firebase.database().ref('reviews');

  const loadReviews = async (recipeName: string): Promise<void> => {
    let reviews: Array<Review> = [];
    await reviewsTable
      .orderByChild('recipe_name')
      .equalTo(recipeName)
      .once("value")
      .then((data) => {
        data.forEach((childNode) => {
          const row = childNode.val();
          const review: Review = {
            recipeName: row['recipe_name'],
            commenterName: row['commenter_name'],
            text: row['text'],
            stars: row['stars'],
          };
          reviews.unshift(review);
        });
      });
    setReviews(reviews);
  }

  const saveReview = async (commenterName: string, stars: number, review: string): Promise<void> => {
    await reviewsTable.push({
      commenter_name: commenterName,
      stars: stars,
      text: review,
      recipe_name: ItemDetails?.name,
    });
  }

  React.useEffect(() => {
    fetch(`${TACO_API_BASE}/toppings/${slug}.json`)
      .then(response => response.json())
      .then(setItemDetails);
  }, [slug]);

  React.useEffect(() => {
    ItemDetails && loadReviews(ItemDetails.name);
  }, [ItemDetails])

  const [review, updateReview] = React.useState<string>();
  const [name, updateName] = React.useState<string>();
  const [stars, updateStars] = React.useState<number>(0);

  return (
    <Layout>
      {ItemDetails && (
        <>
          <h1>{ItemDetails.name}</h1>
          <ReactMarkdown source={ItemDetails.recipe} />
        </>
      )}
      <Box style={{ paddingTop: "20px"}}>
        <Typography variant="h6">Leave a review</Typography>
        <Box display="inline">
          <Rating
            name="simple-controlled"
            value={stars}
            onChange={(event, newStars) => {
              newStars && updateStars(newStars);
            }}
          />
          <Box display="flex" justifyContent="space-between">
            <TextField
              variant="outlined"
              placeholder="Name"
              style={{ marginRight: "10px", width: "30%" }}
              value={name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                updateName(event.target.value)
              }
            />
            <TextField
              variant="outlined"
              fullWidth
              multiline
              placeholder="Review this taco Item"
              style={{ marginRight: "10px" }}
              value={review}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                updateReview(event.target.value)
              }
            />
            <Button
              color="primary"
              variant="contained"
              style={{ width: "200px", maxHeight: "56px" }}
              onClick={() => {
                updateName("");
                updateStars(0);
                updateReview("");
                if (review) {
                  saveReview(name || "Anonymous", stars, review);
                  ItemDetails && loadReviews(ItemDetails.name);
                }
              }}
            >
              Submit Review
            </Button>
          </Box>
        </Box>
        <ReviewsList
          reviews={reviews}
        />
      </Box>
    </Layout>
  );
};

export default ItemDetailsPage;
