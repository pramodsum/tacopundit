import React from "react";
import { Card, CardContent } from "@material-ui/core";
import ReactMarkdown from "react-markdown";

import "./RecipeCard.css";
import { Link } from "react-router-dom";
import { Recipe } from "../../utils/types";

const shortenString = (str: string, maxLen: number, separator = " ") => {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
};

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => (
  <Link
    to={`${process.env.PUBLIC_URL}/${recipe.slug}`}
    className="recipe-card-link-wrapper"
  >
    <Card className="recipe-card">
      <CardContent>
        <h2>{recipe.name}</h2>
        {recipe.recipe && (
          <ReactMarkdown source={`${shortenString(recipe.recipe, 200)}...`} />
        )}
      </CardContent>
    </Card>
  </Link>
);

export default RecipeCard;
