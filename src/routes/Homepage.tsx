import React from "react";
import "typeface-roboto";

import Layout from "../components/Layout/Layout";
import ItemList from "../components/ItemList/ItemList";
import { Item } from "../utils/types";

import { TACO_API_BASE } from "../utils/globals";

const ItemPage: React.FC = () => {
  const [items, setItem] = React.useState<Array<Item>>([]);

  React.useEffect(() => {
    fetch(`${TACO_API_BASE}/toppings`)
      .then(response => response.json())
      .then(setItem);
  }, []);

  return (
    <Layout>
      <ItemList items={items} />
    </Layout>
  );
};

export default ItemPage;
