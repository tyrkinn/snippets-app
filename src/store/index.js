import create from "zustand";
import {
  addCategory as apiAddCategory,
  addSnippet as apiAddSnippet,
  deleteCategory,
  deleteSnippet,
  getAllCategories,
  getAllSnippets,
} from "../helpers/snippets_api";

export const useStore = create((set, get) => ({
  searchCategory: null,
  editorCategory: null,
  categoryList: [],
  snippetList: [],
  searchString: "",
  editorValue: "",
  setSnippetList: (newSnippetList) => {
    set(() => ({ snippetList: newSnippetList }));
  },
  setEditorValue: (newEditorValue) => {
    set(() => ({ editorValue: newEditorValue }));
  },
  updateSnippetList: async () => {
    const snippets = await getAllSnippets();
    set(() => ({ snippetList: snippets}))
  },
  addSnippet: async (snippet) => {
    const res = await apiAddSnippet(snippet);
    return res;
  },
  setSearchString: (newSearch) => set(() => ({ searchString: newSearch })),
  setSearchCategory: (newSearchCategory) =>
    set(() => ({ searchCategory: newSearchCategory })),
  setEditorCategory: (newEditorCategory) =>
    set(() => ({ editorCategory: newEditorCategory })),
  setCategoryList: (newCategoryList) => {
    return set(() => ({ categoryList: newCategoryList }));
  },
  updateCategoryList: async () => {
    const categories = await getAllCategories(); 
    return set(() => ({ categoryList: categories }));
  },
  addCategory: async (category) => {
    const res = await apiAddCategory(category);
    return res;
  },
  deleteCategory: async (categoryId) => {
    const res = await deleteCategory(categoryId);
    return res;
  },
  deleteSnippet: async (snippetId) => {
    const res = await deleteSnippet(snippetId);
    return res;
  },
  filteredSnippets: () => {
    const { searchString, snippetList, searchCategory  } = get();
    const bySearchString = searchString.trim().length > 1
      ? snippetList.filter((s) => s.name.startsWith(searchString.trim()))
      : snippetList;
    const byCategory = searchCategory ? bySearchString.filter(s => s.category === searchCategory) : bySearchString;
    return byCategory;
  },
}));
