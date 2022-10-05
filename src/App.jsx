import React from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { useStore } from "./store";
import { useEffect } from "react";
import { CategoryList, Editor, SnippetList } from './components';

const App = () => {
  const { categoryList, updateSnippetList, updateCategoryList } = useStore(
    (state) => ({
      categoryList: state.categoryList,
      updateSnippetList: state.updateSnippetList,
      updateCategoryList: state.updateCategoryList,
    })
  );

  useEffect(() => {
    updateSnippetList();
    updateCategoryList();
  }, []);

  return (
    <Container
      as={Grid}
      maxW="container.lg"
      h="full"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={8}
      p={5}
    >
      <GridItem colSpan={2} h="full" overflow="hidden">
        <SnippetList />
      </GridItem>
      <GridItem rowStart={2} h="full" overflow="hidden">
        <Editor />
      </GridItem>
      <GridItem rowStart={2} h="full" overflow="hidden">
        <CategoryList categories={categoryList} />
      </GridItem>
    </Container>
  );
};

export default App;
