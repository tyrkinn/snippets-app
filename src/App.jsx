import React from 'react'
import { Container } from '@chakra-ui/react';
import SnippetList from './components/snippets/SnippetList';
import Editor from './components/editor/Editor';
import CategoryList from './components/category/CategoryList';
import { useStore } from './store';
import { useEffect } from 'react';
import { getAllCategories } from './helpers/snippets_api';

const App = () => {
  const { categoryList, setCategoryList } = useStore(state => ({ categoryList: state.categoryList, setCategoryList: state.setCategoryList }))

  const getCategories = async () => {
    const newCategories = await getAllCategories();
    setCategoryList(newCategories);
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <Container maxW="container.lg">
      <SnippetList />
        <Editor />
      <CategoryList categories={categoryList}/>
    </Container>
  )
}

export default App
