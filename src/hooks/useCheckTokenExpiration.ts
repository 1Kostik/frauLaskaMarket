import { clearToken } from "@redux/auth/slice";
import { useDispatch } from "react-redux";

export function useCheckTokenExpiration() {
    const dispatch = useDispatch();
  
    const checkExpiration = () => {
      const expirationDate = localStorage.getItem("expirationDate");
      const currentTime = new Date().getTime();
  
      if (expirationDate && currentTime > parseInt(expirationDate, 10)) {
        dispatch(clearToken());
        localStorage.removeItem("expirationDate");
      }
    };
  
    return checkExpiration;
  }