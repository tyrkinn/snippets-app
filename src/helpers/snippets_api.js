import { collection, getDocs, getDoc, addDoc, doc, deleteDoc } from "firebase/firestore/lite";
import firestore from "./firebase";

export const getAllSnippets = async () => {
  const coll = collection(firestore, "snippets");
  const snapshot = await getDocs(coll);
  const snippets = snapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
  return snippets;
};

export const addSnippet = async (snippet) => {
  const coll = collection(firestore, "snippets");
  try {
    await addDoc(coll, snippet);
    return true;
  } catch(e) {
    console.log(e);
    return false;
  }
};

export const deleteCategory = async (categoryId) => {
  const cat = doc(firestore, 'categories', categoryId);
  try {
    await deleteDoc(cat);
    return true;
  } catch {
    return false;
  }
}

export const deleteSnippet = async (snippetId) => {
  const snip = doc(firestore, 'snippets', snippetId);
  try {
    await deleteDoc(snip);
    return true;
  } catch {
    return false;
  }
}

export const addCategory = async (category) => {
  const coll = collection(firestore, "categories");
  try {
    await addDoc(coll, category);
    return true;
  } catch {
    return false;
  }
};

export const getAllCategories = async () => {
  const coll = collection(firestore, "categories");
  const snapshot = await getDocs(coll);
  const categories = snapshot.docs.map((d) => ({ ...d.data(), id: d.id }));
  return categories;
};
