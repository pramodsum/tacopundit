import React from "react";
import { List } from "@material-ui/core";

import "./ItemList.css";
import ItemCard from "../ItemCard/ItemCard";
import { Item } from "../../utils/types";

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
