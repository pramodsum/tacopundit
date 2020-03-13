import React from "react";
import { List } from "@material-ui/core";

import "./ItemList.css";
import ItemCard, { Item } from "../ItemCard/ItemCard";

const ItemList: React.FC<{ items: Array<Item> }> = ({ items }) => {
  return (
    <List className="items-list">
      {items.map(item => (
        <ItemCard item={item} />
      ))}
    </List>
  );
};

export default ItemList;
