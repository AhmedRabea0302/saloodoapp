import { isExpired } from "react-jwt";
import { Navigate } from "react-router-dom";
import AuthToken from "../Services/AuthToken";

export const ProtectedRoute = ({ children }) => {
  const token = AuthToken();
  const isMyTokenExpired = isExpired(token);

  if (!token || isMyTokenExpired) {
    // user is not authenticated
    localStorage.removeItem("user");
    return <Navigate to="/login" />;
  }
  return children;
};
