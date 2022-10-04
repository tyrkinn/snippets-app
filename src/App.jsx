import React from 'react'
import { Heading, Container } from '@chakra-ui/react';
import SnippetList from './components/snippets/SnippetList';
import Editor from './components/editor/Editor';
import CategoryList from './components/category/CategoryList';

const App = () => {
  return (
    <Container maxW="container.lg">
      <SnippetList />
      <Editor />
      <CategoryList />
    </Container>
  )
}

export default App
