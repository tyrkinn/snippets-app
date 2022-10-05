import { HStack, Text, useToast, Button, ButtonGroup } from "@chakra-ui/react";
import { useStore } from "../../store";

export const CategoryItem = ({ item }) => {

  const toast = useToast({position: 'top-right', isClosable: true})
  const { updateCategoryList, deleteCategory } = useStore(state => ({updateCategoryList: state.updateCategoryList, deleteCategory: state.deleteCategory}));

  const onDelete = async () => {
    const isDel = await deleteCategory(item.id);
    if (isDel) {
      toast({ status: 'success', title: 'Successfully deleted category'});
      updateCategoryList();
    } else {
      toast({ status: 'error', title: "Can't delete category. Error occured"});
    }
  }

 
  return (
    <HStack
      rounded="lg"
      px={5}
      py={3}
      justifyContent="space-between"
      w="full"
      _hover={{ background: "gray.100" }}
      alignItems="center"
    >
      <Text fontSize="md" >{item.name}</Text>
      <ButtonGroup>
        <Button size="sm" variant="link" colorScheme='telegram' onClick={onDelete}>Delete</Button>
      </ButtonGroup>
    </HStack>
  );

};

