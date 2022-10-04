import React from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import SnippetList from "./components/snippets/SnippetList";
import Editor from "./components/editor/Editor";
import CategoryList from "./components/category/CategoryList";
import { useStore } from "./store";
import { useEffect } from "react";
import { getAllCategories, getAllSnippets } from "./helpers/snippets_api";

const App = () => {
  const { categoryList, setCategoryList, setSnippetList } = useStore(
    (state) => ({
      categoryList: state.categoryList,
      setCategoryList: state.setCategoryList,
      setSnippetList: state.setSnippetList,
    })
  );

  const getCategories = async () => {
    const newCategories = await getAllCategories();
    setCategoryList(newCategories);
  };

  const getSnippets = async () => {
    const snippets = await getAllSnippets();
    setSnippetList(snippets);
  };

  useEffect(() => {
    getCategories();
    getSnippets();
  }, []);

  return (
    <Container
      as={Grid}
      maxW="container.lg"
      h="full"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
      p={5}
    >
      <GridItem colSpan={2}>
        <SnippetList />
      </GridItem>
      <GridItem rowStart={2}>
        <Editor />
      </GridItem>
      <GridItem rowStart={2}>
        <CategoryList categories={categoryList} />
      </GridItem>
    </Container>
  );
};

export default App;
