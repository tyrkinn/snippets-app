import { useState } from "react";
import { Button, Input, HStack, useToast } from "@chakra-ui/react";
import { useStore } from "../../store";

export const CategoryAddField = () => {
  const [input, setInput] = useState("");

  const toast = useToast({ position: "top-right", isClosable: true });

  const { addCategory, updateCategoryList } = useStore((state) => ({
    addCategory: state.addCategory,
    updateCategoryList: state.updateCategoryList,
  }));

  const onAddCategory = async () => {
    const tinp = input.trim();

    if (tinp.length !== 0) {
      const res = await addCategory({ name: tinp });
      if (res) {
        toast({ status: "success", title: "Successfully added new category" });
      } else {
        toast({ status: "error", title: "Can't add category. Error occured" });
      }
      updateCategoryList();
    } else {
      toast({ status: "error", title: "Input should not be empty" });
    }

    setInput("");
  };

  return (
    <HStack>
      <Input
        w="70%"
        type="text"
        value={input}
        placeholder="Category name..."
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={onAddCategory} w="30%" colorScheme="telegram">
        Add Category
      </Button>
    </HStack>
  );
};
