import React from "react";
import { VStack, List, ListItem, Divider } from "@chakra-ui/react";
import SnippetItem from "./SnippetItem";
import SnippetSearch from "./SnippetSearch";
import { useStore } from "../../store";

const SnippetList = () => {
  const snippetList = useStore((state) => state.snippetList);

  return (
    <VStack
      minW="60%"
      h="full"
      rounded="lg"
      p={5}
      alignItems="start"
      bgColor="white"
    >
      <SnippetSearch />
      <Divider borderColor="gray.400" pt={2} />
      <List w="full">
        {snippetList.length !== 0 &&
          snippetList.map((s) => (
            <>
              <ListItem key={s.id}>
                <SnippetItem item={s} />
              </ListItem>
              <Divider py={1} borderColor="gray.200" />
            </>
          ))}
      </List>
    </VStack>
  );
};

export default SnippetList;
