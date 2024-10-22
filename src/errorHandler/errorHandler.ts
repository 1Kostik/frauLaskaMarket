import axios from "axios";
import { toast } from "react-toastify";

export const handlerAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const status = error.response.status;
      if (status === 500) {
        toast.error("Сталася внутрішня помилка на сервері. Спробуйте пізніше.");
      } else if (status === 503) {
        toast.error("Сервер тимчасово недоступний. Спробуйте пізніше.");
      }
    } else if (error.request) {
      console.log("Сервер не відповів:", error.request);
      toast.error("Сервер не відповідає. Спробуйте пізніше.");
    } else {
      console.log("Помилка при налаштуванні запиту:", error.message);
    }
  } else {
    console.error("Non-Axios error:", error);
  }
};
