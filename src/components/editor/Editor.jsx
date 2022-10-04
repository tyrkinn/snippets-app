import React from "react";
import {
  Flex,
  Text,
  HStack,
  Input,
  Button,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import EditorField from "./EditorField";
import { CategoryDropdown } from "../shared";
import { useStore } from "../../store";

const Editor = ({}) => {
  const { categoryList, setEditorCategory, editorCategory } = useStore(
    (state) => ({
      categoryList: state.categoryList,
      setEditorCategory: state.setEditorCategory,
      editorCategory: state.setEditorCategory,
    })
  );
  return (
    <Flex
      w="full"
      minH="300px"
      h="full"
      rounded="lg"
      direction="column"
      bgColor="white"
      p={5}
    >
      <Grid templateRows="0.7fr 1fr 4fr 0.9fr" h="full" gap={3}>
        <GridItem>
          <Heading p={0} size="md">
            Editor
          </Heading>
        </GridItem>
        <GridItem>
          <HStack>
            <CategoryDropdown
              categories={categoryList}
              setCategory={setEditorCategory}
              currentCategory={editorCategory.name}
            />
            <Input placeholder="Snippet name..." w="70%" />
          </HStack>
        </GridItem>

        <GridItem>
          <EditorField />
        </GridItem>

        <GridItem>
          <Button colorScheme="facebook" h="full" w="full">
            Add snippet
          </Button>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Editor;
