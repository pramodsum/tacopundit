import React from "react";
import { List } from "@material-ui/core";

import "./RecipeList.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Recipe } from "../../utils/types";

const RecipeList: React.FC<{ items: Array<Recipe> }> = ({ items }) => {
  return (
    <List className="items-list">
      {items.map(item => (
        <RecipeCard item={item} />
      ))}
    </List>
  );
};

export default RecipeList;
