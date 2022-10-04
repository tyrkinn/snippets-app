import create from "zustand";

export const store = create(() => ({
  searchCategory: null,
  editorCategory: null,
  categoryList: [],
}));
