export const snippetsToCategories = (jsonArr) => {
  return jsonArr.map((s) => s.category);
};
