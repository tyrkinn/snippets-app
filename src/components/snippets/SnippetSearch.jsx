import React from "react";
import { Input, HStack } from "@chakra-ui/react";
import { CategoryDropdown } from "../shared";
import { useStore } from "../../store";

const SnippetSearch = () => {
  const { categoryList, setSearchCategory, searchString, setSearchString } =
    useStore((state) => ({
      categoryList: state.categoryList,
      setSearchCategory: state.setSearchCategory,
      searchString: state.searchString,
      setSearchString: state.setSearchString,
    }));
  return (
    <HStack w="full">
      <CategoryDropdown
        categories={categoryList}
        setCategory={setSearchCategory}
      />
      <Input
        placeholder="Search snippet..."
        value={searchString}
        type="search"
        onChange={(e) => setSearchString(e.target.value)}
      />
    </HStack>
  );
};

export default SnippetSearch;
