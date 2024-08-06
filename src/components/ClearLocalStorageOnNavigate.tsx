import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ClearLocalStorageOnNavigate = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/store") {
      localStorage.removeItem("filter");
    }
  }, [location]);

  return null;
};

export default ClearLocalStorageOnNavigate;
