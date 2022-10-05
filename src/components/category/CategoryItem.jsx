import { HStack, Text, } from '@chakra-ui/react';
import { useStore } from '../../store';


export const CategoryItem = ({ item }) => {
  const setSearchCategory = useStore(state => state.setSearchCategory);

  return (
      <HStack
        rounded="lg"
        px={5}
        py={3}
        justifyContent="space-between"
        w="full"
        _hover={{ background: "gray.200" }}
        onClick={() => setSearchCategory(item)}
      >
        <Text fontSize="md">
          {item.name}
        </Text>
      </HStack>
  )  

}
