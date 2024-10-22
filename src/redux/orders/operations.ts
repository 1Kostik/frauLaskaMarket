import { KnownError } from "@redux/categories/operations";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import {
//   getOrders,
  getOrderById,
//   updateOrder,
//   deleteOrder,
} from "@services/servicesApi";

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async (id: number, thunkApi) => {
    try {
      const order = await getOrderById(id);
      return order;
    } catch (err) {
      toast.error("Шось пійшло не так");
      const error = err as AxiosError<KnownError>;
      if (!error.response) {
        throw err;
      }
      return thunkApi.rejectWithValue({
        errorMessage: error.response.data,
      });
    }
  }
);
