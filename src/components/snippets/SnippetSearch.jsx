import React from "react";
import { Input, Flex, Button } from "@chakra-ui/react";
import { CategoryDropdown } from "../shared";
import { useStore } from "../../store";

const SnippetSearch = () => {
  const { categoryList, setSearchCategory, searchCategory } = useStore((state) => ({
    categoryList: state.categoryList,
    setSearchCategory: state.setSearchCategory,
    searchCategory: state.searchCategory,
  }));
  return (
    <>
      <CategoryDropdown categories={categoryList} setCategory={setSearchCategory} currentCategory={searchCategory} />
      <Input placeholder="Search snippet" />
    </>
  );
};

export default SnippetSearch;
