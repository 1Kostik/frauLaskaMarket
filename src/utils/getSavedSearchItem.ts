export const getSavedSearchItem = () => {
  const savedSearchItem = sessionStorage.getItem("savedSearchItem");
  const parsedSavedSearchItem = savedSearchItem && JSON.parse(savedSearchItem);
  return parsedSavedSearchItem;
};
