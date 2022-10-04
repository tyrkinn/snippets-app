import create from "zustand";
import {
  addCategory as apiAddCategory,
  getAllCategories,
  getAllSnippets,
} from "../helpers/snippets_api";

export const useStore = create((set, get) => ({
  searchCategory: null,
  editorCategory: null,
  categoryList: [],
  snippetList: [],
  searchString: "",
  setSnippetList: (newSnippetList) => {
    set(() => ({ snippetList: newSnippetList }));
  },
  setSearchString: (newSearch) => set(() => ({ searchString: newSearch })),
  setSearchCategory: (newSearchCategory) =>
    set(() => ({ searchCategory: newSearchCategory })),
  setEditorCategory: (newEditorCategory) =>
    set(() => ({ editorCategory: newEditorCategory })),
  setCategoryList: (newCategoryList) => {
    return set(() => ({ categoryList: newCategoryList }));
  },
  addCategory: async (category) => {
    await apiAddCategory(category);
  },
  filteredSnippets: () => {
    const { searchString, snippetList } = get();
    return searchString.trim().length > 2
      ? snippetList.filter((s) => s.startsWith(searchString.trim()))
      : snippetList;
  },
}));
