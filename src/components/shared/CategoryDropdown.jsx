import React from "react";
import { Select } from "@chakra-ui/react";

const CategoryDropdown = ({ categories, setCategory, currentCategory }) => {
  return (
    <Select placeholder="Category" w="30%" defaultValue='none'>
      {categories.map((c) => (
        <option value={c.name} selected={c.name === currentCategory} key={c.id} onClick={() => setCategory(c)}>
          {c.name}
        </option>
      ))}
        <option value="none">None</option>
    </Select>
  );
};

export default CategoryDropdown;
