import { collection, getDocs, addDoc } from "firebase/firestore/lite";
import firestore from "./firebase";

export const getAllSnippets = async () => {
  const coll = collection(firestore, "snippets");
  const snapshot = await getDocs(coll);
  const snippets = snapshot.docs.map((d) => d.data);
  return snippets;
};

export const addSnippet = async (snippet) => {
  const coll = collection(firestore, "snippets");
  try {
    await addDoc(coll, snippet);
    return true;
  } catch {
    return false;
  }
};
