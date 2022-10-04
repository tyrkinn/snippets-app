import React from "react";
import { Flex, List, ListItem } from "@chakra-ui/react";
import SnippetItem from "./SnippetItem";
import SnippetSearch from "./SnippetSearch";
import { useStore } from "../../store";

const SnippetList = () => {
  const snippetList = useStore(state => state.snippetList);

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
      <List>
        {snippetList.length !== 0  && snippetList.map(
          s => (
            <ListItem key={s.id}>
              <SnippetItem item={s} />
            </ListItem>
          )
        )}
      </List>
    </Flex>
  );
};

export default SnippetList;
