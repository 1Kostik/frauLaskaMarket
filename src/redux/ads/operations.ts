import { KnownError } from "@redux/categories/operations";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postAdvert } from "@services/servicesApi";
import { AxiosError } from "axios";

export const createAdvert = createAsyncThunk(
  "ads/create",
  async (formData: FormData, thunkAPI) => {
    try {
      const advert = postAdvert(formData);
      return advert;
    } catch (err) {
      const error = err as AxiosError<KnownError>;
      if (!error.response) {
        throw err;
      }
      return thunkAPI.rejectWithValue({
        errorMessage: error.response.data,
      });
    }
  }
);
