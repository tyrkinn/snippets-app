import React from "react";
import { Select } from "@chakra-ui/react";

const CategoryDropdown = ({ categories, setCategory, currentCategory }) => {
  return (
    <Select placeholder="Category" w="30%" >
      {categories.map((c) => (
        <option
          value={c.name}
          selected={c.name === currentCategory}
          key={c.id}
          onClick={() => setCategory(c)}
        >
          {c.name}
        </option>
      ))}
    </Select>
  );
};

export default CategoryDropdown;
