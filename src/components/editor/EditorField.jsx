import React from "react";
import { Textarea } from "@chakra-ui/react";

const EditorField = () => {
  return (
    <Textarea
      placeholder="Enter code snippet..."
      resize="none"
      h="full"
    ></Textarea>
  );
};

export default EditorField;
