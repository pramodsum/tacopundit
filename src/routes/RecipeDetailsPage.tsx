import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { TextField, Box, Typography, Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import firebase from "firebase/app";

import ReviewList from "../components/ReviewList/ReviewList";
import Layout from "../components/Layout/Layout";
import { TACO_API_BASE } from "../utils/globals";
import { RouteParams, RecipeDetails } from "../utils/types";

const ItemDetailsPage: React.FC<RouteComponentProps> = ({ match }) => {
  const { slug } = match.params as RouteParams;
  const [recipeDetails, setItemDetails] = React.useState<RecipeDetails>();
  const [review, updateReview] = React.useState<string>();
  const [name, updateName] = React.useState<string>();
  const [stars, updateStars] = React.useState<number>(0);
  const reviewsTable: firebase.database.Reference = firebase
    .database()
    .ref("reviews");

  React.useEffect(() => {
    fetch(`${TACO_API_BASE}/toppings/${slug}.json`)
      .then(response => response.json())
      .then(setItemDetails);
  }, [slug]);

  const saveReview = React.useCallback(
    (commenterName: string, stars: number, review: string) =>
      reviewsTable.push({
        commenter_name: commenterName,
        stars: stars,
        text: review,
        recipe_name: recipeDetails?.name
      }),
    [recipeDetails, reviewsTable]
  );

  return (
    <Layout>
      {recipeDetails && (
        <>
          <h1>{recipeDetails.name}</h1>
          <ReactMarkdown source={recipeDetails.recipe} />
        </>
      )}
      <Box style={{ paddingTop: "20px" }}>
        <Typography variant="h6">Leave a review</Typography>
        <Box display="inline">
          <Rating
            name="simple-controlled"
            value={stars}
            onChange={(_event, newStars) => {
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
              placeholder="Review this taco Recipe"
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
                }
              }}
            >
              Submit Review
            </Button>
          </Box>
        </Box>
        {recipeDetails?.name && (
          <ReviewList
            recipeName={recipeDetails.name}
            onReviewSave={saveReview}
          />
        )}
      </Box>
    </Layout>
  );
};

export default ItemDetailsPage;
