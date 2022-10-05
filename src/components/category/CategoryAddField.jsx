import { useState } from "react";
import { Button, Input, HStack } from '@chakra-ui/react';

export const CategoryAddField = () => {
  const [input, setInput] = useState('');

  return (
    <HStack>
      <Input w="70%" type='text' value={input} placeholder="Category name..." onChange={e => setInput(e.target.value)} />
      <Button w="30%" colorScheme='telegram'>Add Category</Button>
    </HStack>
  )
}
