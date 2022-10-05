import React, { useState } from "react";
import {
  HStack,
  Input,
  Button,
  Heading,
  Grid,
  GridItem,
  useToast,
} from "@chakra-ui/react";
import EditorField from "./EditorField";
import { CategoryDropdown } from "../shared";
import { useStore } from "../../store";

const Editor = ({}) => {
  const {
    categoryList,
    setEditorCategory,
    editorCategory,
    addSnippet,
    editorValue,
    setEditorValue,
    updateSnippetList,
  } = useStore((state) => ({
    categoryList: state.categoryList,
    setEditorCategory: state.setEditorCategory,
    editorCategory: state.editorCategory,
    addSnippet: state.addSnippet,
    editorValue: state.editorValue,
    setEditorValue: state.setEditorValue,
    updateSnippetList: state.updateSnippetList,
  }));

  const [nameInp, setNameInp] = useState("");

  const toast = useToast({ position: "top-right", isClosable: true });

  const onAddSnippet = async () => {
    const tinp = editorValue.trim();
    const tname = nameInp.trim();

    const editorNotChosen = editorCategory === "" || editorCategory === null;
    const inpEmpty = tinp.length === 0;
    const nameEmpty = tname.length === 0;

    console.log(`tinp: ${tinp}, tname: ${tname}, cat: ${editorCategory}`);

    if (editorNotChosen) {
      toast({ status: "error", title: "You should pick up category first" });
    }
    if (inpEmpty) {
      toast({ status: "error", title: "Input should not be empty" });
    }
    if (nameEmpty) {
      toast({ status: "error", title: "Snippet name should not be empty" });
    }

    if (!editorNotChosen && !inpEmpty && !nameEmpty) {
      const res = await addSnippet({
        name: tname,
        code: tinp,
        category: editorCategory,
      });
      if (res) {
        toast({ status: "success", title: "Snippet successfully added" });
        await updateSnippetList();
      } else {
        toast({ status: "error", title: "Can't add snippet. Error occured" });
      }
      setEditorValue("");
    }
  };

  return (
    <Grid
      p={5}
      bgColor="white"
      rounded="lg"
      shadow="md"
      templateRows="0.4fr 0.7fr 4fr 0.9fr"
      h="full"
      gap={5}
    >
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
            currentCategory={editorCategory}
          />
          <Input
            placeholder="Snippet name..."
            w="70%"
            value={nameInp}
            onChange={(e) => setNameInp(e.target.value)}
          />
        </HStack>
      </GridItem>

      <GridItem>
        <EditorField />
      </GridItem>

      <GridItem>
        <Button colorScheme="telegram" h="full" w="full" onClick={onAddSnippet}>
          Add snippet
        </Button>
      </GridItem>
    </Grid>
  );
};

export default Editor;
