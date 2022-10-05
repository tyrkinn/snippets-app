export { getAllSnippets, addSnippet } from "./snippets_api";

export { snippetsToCategories } from "./snippets";

export const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch(e) {
    console.error(e);
    return false;
  }

}
