import { useCheckTokenExpiration } from "@hooks/useCheckTokenExpiration";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ClearLocalStorageOnNavigate = () => {
  const checkExpiration = useCheckTokenExpiration();
  const location = useLocation();
  const storePage = location.pathname === "/";
  const productPage = location.pathname.includes("product");

  useEffect(() => {
    checkExpiration();
    if (!(storePage || productPage)) {
      sessionStorage.clear();
    }
  }, [location]);

  return null;
};

export default ClearLocalStorageOnNavigate;
