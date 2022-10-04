import React from "react";
import { Input, HStack } from "@chakra-ui/react";
import { CategoryDropdown } from "../shared";
import { useStore } from "../../store";

const SnippetSearch = () => {
  const { categoryList, setSearchCategory, searchCategory } = useStore((state) => ({
    categoryList: state.categoryList,
    setSearchCategory: state.setSearchCategory,
    searchCategory: state.searchCategory,
  }));
  return (
    <HStack>
      <CategoryDropdown categories={categoryList} setCategory={setSearchCategory} currentCategory={searchCategory} />
      <Input placeholder="Search snippet" />
    </HStack>
  );
};

export default SnippetSearch;
