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

const RecipeCard: React.FC<{ item: Recipe }> = ({ item }) => (
  <Link to={`/${item.slug}`} className="item-card-link-wrapper">
    <Card className="item-card">
      <CardContent>
        <h2>{item.name}</h2>
        {item.recipe && (
          <ReactMarkdown source={`${shortenString(item.recipe, 200)}...`} />
        )}
      </CardContent>
    </Card>
  </Link>
);

export default RecipeCard;
