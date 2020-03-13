import React from "react";
import "typeface-roboto";
import { Typography } from "@material-ui/core";

import Layout from "../components/Layout/Layout";
import ToppingsList from "../components/ToppingsList/ToppingsList";
import { Topping } from "../components/ToppingCard/ToppingCard";

import { TACO_API_BASE } from "../utils/globals";

const ToppingsPage: React.FC = () => {
  const [toppings, setToppings] = React.useState<Array<Topping>>([]);

  React.useEffect(() => {
    fetch(`${TACO_API_BASE}/toppings`)
      .then(response => response.json())
      .then(setToppings);
  }, []);

  return (
    <Layout>
      <Typography variant="h3">Taco Toppings</Typography>
      <ToppingsList toppings={toppings} />
    </Layout>
  );
};

export default ToppingsPage;
