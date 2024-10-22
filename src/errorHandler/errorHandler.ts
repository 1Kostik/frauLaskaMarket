import axios from "axios";
import { toast } from "react-toastify";

export const handlerAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        toast.error("Вам потрібно увійти до системи.");
      } else if (status === 500 || status === 503) {
        toast.error("Сервер не відповідає. Спробуйте пізніше.");
      }
    } else if (error.request) {
      console.log("Сервер не відповів:", error.request);
      toast.error("Сервер не відповідає. Спробуйте пізніше.");
    } else {
      console.log("Щось пішло не так при запиті:", error.message);
    }
  } else {
    console.error("Non-Axios error:", error);
  }
};
