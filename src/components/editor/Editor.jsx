import React from "react";
import {
  Flex,
  Text,
  Textarea,
  Select,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react";
import EditorField from "./EditorField";
import { CategoryDropdown } from "../shared";
import { useStore } from "../../store";

const Editor = ({}) => {
  const { categoryList, setEditorCategory, editorCategory } = useStore((state) => ({
    categoryList: state.categoryList,
    setEditorCategory: state.setEditorCategory,
    editorCategory: state.setEditorCategory,
  }));
  return (
    <Flex
      w="55%"
      minH="300px"
      rounded="lg"
      border="1px"
      p="10px"
      mt="20px"
      direction="column"
    >
      <Text>Editor</Text>

      <HStack>
        <CategoryDropdown
          categories={categoryList}
          setCategory={setEditorCategory}
          currentCategory={editorCategory.name}
        />
        <Input placeholder="Snippet name..." w="70%" />
      </HStack>

      <EditorField />

      <Button mt="10px">Add snippet</Button>
    </Flex>
  );
};

export default Editor;
