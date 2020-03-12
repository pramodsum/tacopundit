import React from "react";
import Layout from "../components/Layout/Layout";
import { RouteComponentProps } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { TextField, Box, Typography, Button } from "@material-ui/core";

type ToppingDetails = {
  name: string;
  slug: string;
  recipe: string;
  url: string;
};

type RouteParams = {
  slug: string;
};

const ToppingDetailsPage: React.FC<RouteComponentProps> = ({ match }) => {
  const { slug } = match.params as RouteParams;

  const [toppingDetails, setToppingDetails] = React.useState<ToppingDetails>();
  fetch(`http://taco-randomizer.herokuapp.com/condiments/${slug}/`)
    .then(response => response.json())
    .then(setToppingDetails);

  const [review, updateReview] = React.useState<string>();

  return (
    <Layout>
      {toppingDetails && <ReactMarkdown source={toppingDetails.recipe} />}
      <Box>
        <Typography variant="h6">Reviews</Typography>
        <Box display="flex" justifyContent="space-between">
          <TextField
            variant="outlined"
            fullWidth
            multiline
            placeholder="Review this taco topping"
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

export default ToppingDetailsPage;
