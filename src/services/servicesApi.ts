import axios from "axios";

axios.defaults.baseURL = "http://localhost:8081/api/";

export const getCategories = async () => {
  const { data } = await axios.get("categories");
  return data;
};

export const postCategory = async (title: string) => {
  const newCategory = { title };
  const { data } = await axios.post("categories", newCategory);
  return data;
};

export const deleteCategory = async (id: number) => {
  const { data } = await axios.delete(`categories/${id}`);
  return data;
};

export const patchCategory = async ({
  id,
  name,
}: {
  id: number;
  name: string;
}) => {
  const { data } = await axios.patch(`categories/${id}`, { title: name });
  return data;
};

export const getProductById = async (id: number) => {
  const { data } = await axios.get(`products/${id}`);
  return data;
};

export const getProducts = async () => {
  const { data } = await axios.get(`products`);
  return data;
};
export const getProductsAndSorted = async (queryParams:string) => {
  const { data } = await axios.get(`products?${queryParams}`);
  return data;
};
export const findProducts = async (queryParams:string) => {
  const { data } = await axios.get(`products?${queryParams}`);
  return data;
};