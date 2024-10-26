import { useCheckTokenExpiration } from "@hooks/useCheckTokenExpiration";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ClearLocalStorageOnNavigate = () => {
  const checkExpiration = useCheckTokenExpiration();
  const location = useLocation();

  useEffect(() => {
    checkExpiration();
    if (
      !location.pathname.includes("product") &&
      !location.pathname.includes("store")
    ) {
      sessionStorage.clear();
    }
  }, [location]);

  return null;
};

export default ClearLocalStorageOnNavigate;
