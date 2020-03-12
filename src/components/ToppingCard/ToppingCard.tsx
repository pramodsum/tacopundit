import React from "react";
import { Card, CardContent } from "@material-ui/core";
import ReactMarkdown from "react-markdown";

import "./ToppingCard.css";
import { Link } from "react-router-dom";

export type Topping = {
  name: string;
  slug: string;
  recipe: string;
  url: string;
};

const shortenString = (str: string, maxLen: number, separator = " ") => {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
};

const ToppingCard: React.FC<{ topping: Topping }> = ({ topping }) => (
  <Link to={`/toppings/${topping.slug}`} className="topping-card-link-wrapper">
    <Card className="topping-card">
      <CardContent>
        <ReactMarkdown source={`${shortenString(topping.recipe, 200)}...`} />
      </CardContent>
    </Card>
  </Link>
);

export default ToppingCard;
