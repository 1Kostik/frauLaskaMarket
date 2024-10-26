export const getSavedCheckedItems = () => {
  const savedFilterState = sessionStorage.getItem("savedFilterState");
  const parsedFilterState = savedFilterState && JSON.parse(savedFilterState);
  const checkedItems = parsedFilterState?.checkedItems;
  return checkedItems || [];
};

export const getSavedOpenCategories = () => {
  const savedFilterState = sessionStorage.getItem("savedFilterState");
  const parsedFilterState = savedFilterState && JSON.parse(savedFilterState);
  const openCategories = parsedFilterState?.openCategories;
  return openCategories || {};
};

export const getSavedIsOpenFilter = () => {
  const savedOpenFilter = sessionStorage.getItem("savedOpenFilter");
  const parsedOpenFilter = savedOpenFilter && JSON.parse(savedOpenFilter);
  return parsedOpenFilter;
};
