import React from "react";
import { Card, CardContent } from "@material-ui/core";
import ReactMarkdown from "react-markdown";

import "./ToppingCard.css";

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
  <Card
    onClick={() => window.location.assign(`/toppings/${topping.slug}`)}
    className="topping-card"
  >
    <CardContent>
      <ReactMarkdown source={`${shortenString(topping.recipe, 200)}...`} />
    </CardContent>
  </Card>
);

export default ToppingCard;
