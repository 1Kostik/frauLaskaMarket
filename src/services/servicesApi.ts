import axios from "axios";
import { IOrder } from "Interfaces/IOrder";
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

export const makePayment = async (orderDetails: IOrder) => {
  try {
    const { data } = await axios.post("/orders/payment", orderDetails);
    if (data.redirectUrl) {
      console.log("data.order_id", data.order_id);
      window.location.href = data.redirectUrl;
    } else {
      toast.error("Шось пішло не так");
    }
  } catch (error) {
    toast.error("Шось пішло не так");
    console.log(error);
  }
};

export const makeOrder = async (orderInfo: IOrder) => {
  try {
    const { data } = await axios.post("orders", orderInfo);
    toast.success("Замовлення створено");
    return data;
  } catch (error) {
    toast.error("Шось пішло не так");
    if (axios.isAxiosError(error)) {
      console.log("Axios error:", error.message);
      console.log("Response:", error.response?.data);
      const errorMessage =
        error.response?.data?.message || "Unknown Axios error";
      throw new Error(errorMessage);
    } else {
      console.error("Non-Axios error:", error);
      throw new Error("Non-Axios error occurred");
    }
  }
};

export const getOrders = async () => {
  try {
    const data = await axios.get("orders");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
export const getOrderById = async (id: number) => {
  try {
    const data = await axios.get(`orders/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateOrder = async (orderId: number, status: string) => {
  try {
    const { data } = await axios.put(`orders/${orderId}`, { status });
    toast.success("Статус замовлення змінено");
    return data;
  } catch (error) {
    toast.error("Шось пішло не так");
    console.log(error);
  }
};

export const getNPCities = async (cityName: string) => {
  const { data } = await axios.post("/new-post/settlements", { cityName });
  return data;
};

export const getWarehouses = async (cityRef: string) => {
  const { data } = await axios.post("/new-post/warehouses", { cityRef });
  return data;
};
