import React from "react";
import "typeface-roboto";

import Layout from "../components/Layout/Layout";
import RecipeList from "../components/RecipeList/RecipeList";
import { Recipe } from "../utils/types";

import { TACO_API_BASE } from "../utils/globals";

const Homepage: React.FC = () => {
  const [items, setItem] = React.useState<Array<Recipe>>([]);

  React.useEffect(() => {
    fetch(`${TACO_API_BASE}/toppings`)
      .then(response => response.json())
      .then(setItem);
  }, []);

  return (
    <Layout>
      <RecipeList items={items} />
    </Layout>
  );
};

export default Homepage;
