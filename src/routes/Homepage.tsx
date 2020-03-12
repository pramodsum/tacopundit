import React from "react";
import "typeface-roboto";

import Layout from "../components/Layout/Layout";
import ToppingsList from "../components/ToppingsList/ToppingsList";
import { Typography } from "@material-ui/core";
import { Topping } from "../components/ToppingCard/ToppingCard";

const Homepage: React.FC = () => {
  const [toppings, setToppings] = React.useState<Array<Topping>>([]);

  React.useEffect(() => {
    fetch("http://taco-randomizer.herokuapp.com/condiments/")
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

export default Homepage;
