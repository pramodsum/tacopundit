import React from "react";

import "./ToppingsList.css";
import ToppingCard, { Topping } from "../ToppingCard/ToppingCard";
import { List } from "@material-ui/core";

const ToppingsList: React.FC<{ toppings: Array<Topping> }> = ({ toppings }) => (
  <List className="toppings-list">
    {toppings.map(topping => (
      <ToppingCard topping={topping} />
    ))}
  </List>
);
//<pre>{JSON.stringify(toppings, null, 2)}</pre>;

export default ToppingsList;
