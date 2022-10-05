import React from "react";
import { Text, HStack, ButtonGroup, Button, useToast } from "@chakra-ui/react";
import { useStore } from "../../store";
import { copyText } from "../../helpers";

const SnippetItem = ({ item }) => {
  const { deleteSnippet, updateSnippetList } = useStore((state) => ({
    deleteSnippet: state.deleteSnippet,
    updateSnippetList: state.updateSnippetList,
  }));
  const toast = useToast({ position: "top-right", isClosable: true });

  const onDeleteSnippet = async () => {
    const res = await deleteSnippet(item.id);
    if (res) {
      toast({ status: "success", title: "Successfully deleted snippet" });
      updateSnippetList();
    } else {
      toast({ status: "error", title: "Can't delete snippet. Error occured" });
    }
  };

  const onCopy = async (e) => {
    const tagname = e.target.tagName;
    if (tagname === "BUTTON") {
      return;
    }
    const res = await copyText(item.code);
    if (res) {
      toast({
        status: "success",
        title: "Successfully copied code into clipboard",
      });
    } else {
      toast({ status: "success", title: "Error occured while copying text" });
    }
  };

  return (
    <HStack
      rounded="lg"
      px={5}
      py={3}
      justifyContent="space-between"
      w="full"
      _hover={{ background: "gray.200" }}
      onClick={onCopy}
    >
      <Text fontSize="md" fontWeight="bold">
        {item.name}
      </Text>
      <Text>{item.category}</Text>
      <ButtonGroup>
        <Button variant="link" colorScheme="telegram" onClick={onDeleteSnippet}>
          Delete
        </Button>
      </ButtonGroup>
    </HStack>
  );
};

export default SnippetItem;
