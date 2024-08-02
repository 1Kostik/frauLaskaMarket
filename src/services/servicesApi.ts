import axios from "axios";
import { toast } from "react-toastify";

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

export const deleteCategory = async (id: number) => {
  const { data } = await axios.delete(`categories/${id}`);
  return data;
};

export const postAdvert = async (formData: FormData) => {
  const { data } = await axios.post("products", formData);
  return data;
};

export const deleteAdvert = async (id: number) => {
  const { data } = await axios.delete(`products/${id}`);
  return data;
};

export const putchAdvert = async ({
  id,
  formData,
}: {
  id: number;
  formData: FormData;
}) => {
  const { data } = await axios.patch(`products/${id}`, formData);
  return data;
};

export const getProductById = async (id: number) => {
  const { data } = await axios.get(`products/${id}`);
  return data;
};

export const getAllProducts = async () => {
  const { data } = await axios.get(`products`);
  return data;
};

export const getProductsAndSorted = async (queryParams: string) => {
  const { data } = await axios.get(`products?${queryParams}`);
  return data;
};

export const findProducts = async (queryParams: string) => {
  const { data } = await axios.get(`products?${queryParams}`);
  return data;
};

export const getCategoriesProductCount = async () => {
  const { data } = await axios.get(`categories/product-count`);
  return data;
};

export const deleteProductImage = async (id: number) => {
  try {
    const { data } = await axios.delete(`products/images/${id}`);
    toast.success("Зображення видалено");
    return data;
  } catch (error) {
    toast.error("Не вдалося видалити зображення");
    console.log(error);
  }
};

export const deleteProductVariationById = async (id: number) => {
  try {
    const { data } = await axios.delete(`/products/variations/${id}`);
    toast.success("Варіацію видалено");
    return data;
  } catch (error) {
    toast.error("Не вдалося видалити варіацію");
    console.log(error);
  }
};

export const deleteProductFeedbackById = async (id: number) => {
  try {
    const { data } = await axios.delete(`/products/feedbacks/${id}`);
    toast.success("Відгук видалено");
    return data;
  } catch (error) {
    toast.error("Не вдалося видалити відгук");
    console.log(error);
  }
};

export const makePayment = async (totalAmount: number) => {
  try {
    const {data} = await axios.post("/orders/payment", { totalAmount });
    console.log('data.redirectUrl', data.redirectUrl)
    if (data.redirectUrl) {
      window.location.href = data.redirectUrl;
    } else {
      toast.error("Шось пішло не так");
    }
  } catch (error) {
    toast.error("Шось пішло не так");
    console.log(error);
  }
};
