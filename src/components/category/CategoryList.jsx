import React from "react";
import { List, ListItem } from "@chakra-ui/react";

const CategoryList = ({ categories }) => {
  return (
    <List>
      {categories.map((c) => (
        <ListItem key={c.id}>{c.name}</ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
