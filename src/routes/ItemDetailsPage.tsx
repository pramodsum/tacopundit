import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { TextField, Box, Typography, Button } from "@material-ui/core";

import Layout from "../components/Layout/Layout";
import { TACO_API_BASE, RouteParams } from "../utils/globals";

type ItemDetails = {
  name: string;
  slug: string;
  recipe: string;
  url: string;
};

const ItemDetailsPage: React.FC<RouteComponentProps> = ({ match }) => {
  const { slug } = match.params as RouteParams;
  const [ItemDetails, setItemDetails] = React.useState<ItemDetails>();

  React.useEffect(() => {
    fetch(`${TACO_API_BASE}/toppings/${slug}.json`)
      .then(response => response.json())
      .then(setItemDetails);
  }, [slug]);

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
