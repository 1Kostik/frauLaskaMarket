import { KnownError } from "@redux/categories/operations";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticateUser } from "@services/servicesApi";
import { AxiosError } from "axios";

export const authUser = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const data = await authenticateUser(email, password);
      return data;
    } catch (err) {
      const error = err as AxiosError<KnownError>;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue({ errorMessage: error.response.data });
    }
  }
);
