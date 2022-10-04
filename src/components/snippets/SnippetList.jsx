import React from "react";
import { Flex } from "@chakra-ui/react";
import SnippetItem from "./SnippetItem";
import SnippetSearch from "./SnippetSearch";

const SnippetList = () => {
  return (
    <Flex
      minW="60%"
      minH="250px"
      rounded="lg"
      border="1px"
      p="10px"
      mt="20px"
      direction="column"
    >
      <SnippetSearch />
      <SnippetItem />
    </Flex>
  );
};

export default SnippetList;
