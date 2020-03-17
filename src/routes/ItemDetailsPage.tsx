import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { TextField, Box, Typography, Button } from "@material-ui/core";
import * as firebase from 'firebase/app';

import Layout from "../components/Layout/Layout";
import { TACO_API_BASE, RouteParams } from "../utils/globals";

type ItemDetails = {
  name: string;
  slug: string;
  recipe: string;
  url: string;
};

type Review = {
  recipeName: string;
  commenterName: string;
  text: string;
  stars: number;
}

const ItemDetailsPage: React.FC<RouteComponentProps> = ({ match }) => {
  const { slug } = match.params as RouteParams;
  const [ItemDetails, setItemDetails] = React.useState<ItemDetails>();
  const [reviews, setReviews] = React.useState<Array<Review>>();
  const reviewsTable: firebase.database.Reference = firebase.database().ref('reviews');

  const loadReviews = async (name: string): Promise<void> => {
    let reviews: Array<Review> = [];
    await reviewsTable
      .orderByChild('recipe_name')
      .equalTo(name)
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
          reviews.push(review);
        });
      });
    setReviews(reviews);
  }

  // todo: allow ability to submit name, num stars
  const saveReview = async (review: string): Promise<void> => {
    await reviewsTable.push({
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

  return (
    <Layout>
      {ItemDetails && (
        <>
          <h1>{ItemDetails.name}</h1>
          <ReactMarkdown source={ItemDetails.recipe} />
        </>
      )}
      <Box>
        <Typography variant="h6">Reviews</Typography>
        <Box display="flex" justifyContent="space-between">
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
              updateReview("");
              window.alert(`New review: \n${review}`);
              if (review) {
                saveReview(review);
                ItemDetails && loadReviews(ItemDetails.name);
              }
            }}
          >
            Submit Review
          </Button>
        </Box>
      </Box>
    </Layout>
  );
};

export default ItemDetailsPage;
