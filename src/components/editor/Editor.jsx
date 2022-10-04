import React from 'react';
import { Flex, Text, Textarea, Select, HStack, Input, Button } from '@chakra-ui/react'
import EditorField from './EditorField'

const Editor = ( {  } ) => {
    return(
        <Flex w='55%' minH='300px' rounded='lg' border='1px' p='10px' mt='20px' direction='column'>
            <Text>Editor</Text>

            <HStack>
                <Select placeholder='Category' w='30%'>
                    <option value='python'>python</option>                
                </Select>
                <Input placeholder='Snippet name...' w='70%' />
            </HStack> 

            <EditorField/>

            <Button mt='10px'>Add snippet</Button>
        </Flex>
    )
}

export default Editor