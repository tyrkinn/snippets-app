import React from "react";
import { Text, HStack } from "@chakra-ui/react";

const SnippetItem = ({ item }) => {
  return (
    <HStack
      rounded="lg"
      px={5}
      py={3}
      justifyContent="space-between"
      w="full"
      _hover={{ background: "gray.200" }}
    >
      <Text fontSize="md" fontWeight="bold">
        {item.name}
      </Text>
      <Text>{item.category}</Text>
    </HStack>
  );
};

export default SnippetItem;
