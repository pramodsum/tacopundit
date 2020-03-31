import React from "react";
import { List } from "@material-ui/core";

import "./RecipeList.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Recipe } from "../../utils/types";

const RecipeList: React.FC<{ recipes: Array<Recipe> }> = ({ recipes }) => {
  return (
    <List className="recipes-list">
      {recipes.map(recipe => (
        <RecipeCard recipe={recipe} />
      ))}
    </List>
  );
};

export default RecipeList;
