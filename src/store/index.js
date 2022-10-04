import create from "zustand";

export const useStore = create(() => ({
  searchCategory: null,
  editorCategory: null,
  categoryList: [],
}));
