import React from "react";
import "typeface-roboto";
import { Typography } from "@material-ui/core";

import Layout from "../components/Layout/Layout";
import { TACO_API_BASE } from "../utils/globals";

type Category = {
  name: string;
  slug: string;
};

const Homepage: React.FC = () => {
  const [categories, setCategories] = React.useState<Array<Category>>([]);

  React.useEffect(() => {
    fetch(`${TACO_API_BASE}/toppings`)
      .then(response => response.json())
      .then(setCategories);
  }, []);

  return (
    <Layout>
      <Typography variant="h3">Categories</Typography>
      {categories.map(({ name, slug }: Category) => (
        <p>
          <a href={`/tacopundit/${slug}`}>{name}</a>
        </p>
      ))}
    </Layout>
  );
};

export default Homepage;
