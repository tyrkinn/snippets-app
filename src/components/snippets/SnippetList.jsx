import React from "react";
import { VStack, List, ListItem, Divider } from "@chakra-ui/react";
import SnippetItem from "./SnippetItem";
import SnippetSearch from "./SnippetSearch";
import { useStore } from "../../store";

const SnippetList = () => {

  const snippetList = useStore((state) => state.filteredSnippets);
  const snippetListValue = snippetList();

  return (
    <VStack
      minW="60%"
      h="full"
      rounded="lg"
      p={5}
      alignItems="start"
      bgColor="white"
      shadow="md"
    >
      <SnippetSearch />
      <Divider borderColor="gray.400" pt={2} />
      <List w="full" overflowY="scroll">
        {snippetListValue.length !== 0 &&
          snippetListValue.map((s) => (
            <ListItem key={s.id}>
              <SnippetItem item={s} />
              <Divider py={1} borderColor="gray.200" />
            </ListItem>
          ))}
      </List>
    </VStack>
  );
};

export default SnippetList;
