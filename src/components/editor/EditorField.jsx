import React from "react";
import { Textarea } from "@chakra-ui/react";
import { useStore } from "../../store";

const EditorField = () => {
  const { editorValue, setEditorValue } = useStore((state) => ({
    editorValue: state.editorValue,
    setEditorValue: state.setEditorValue,
  }));

  return (
    <Textarea
      placeholder="Enter code snippet..."
      resize="none"
      h="full"
      value={editorValue}
      onChange={(e) => setEditorValue(e.target.value)}
    ></Textarea>
  );
};

export default EditorField;
