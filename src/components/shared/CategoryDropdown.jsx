import React from "react";
import { Select } from "@chakra-ui/react";

const CategoryDropdown = ({ categories, setCategory, currentCategory }) => {
  return (
    <Select placeholder="Category" w="30%" value={currentCategory} >
      {categories.map((c) => (
        <option value={c.name} key={c.id} onClick={() => setCategory(c)}>
          {c.name}
        </option>
      ))}
    </Select>
  );
};

export default CategoryDropdown;
