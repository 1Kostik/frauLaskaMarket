import { jwtDecode } from "jwt-decode";

export const setAuthToken = (token: string): void => {
  if (!token) {
    throw new Error("Token is required");
  }

  const decodedToken = jwtDecode<{ exp: number }>(token);

  const expirationDate = decodedToken.exp * 1000;

  localStorage.setItem("expirationDate", expirationDate.toString());
};
