import React from "react";
import { Select } from "@chakra-ui/react";
import { useState } from "react";

const CategoryDropdown = ({ categories, setCategory }) => {
  const [selectValue, setSelectValue] = useState(categories[0]?.name || "");
  return (
    <Select
      placeholder="Category"
      w="30%"
      onChange={(e) => {
        setCategory(e.target.value)
        setSelectValue(e.target.value)
      }}
      value={selectValue}
    >
      {categories.map((c) => (
        <option value={c.name} key={c.id} onClick={() => {setCategory(c)}}>
          {c.name}
        </option>
      ))}
    </Select>
  );
};

export default CategoryDropdown;
