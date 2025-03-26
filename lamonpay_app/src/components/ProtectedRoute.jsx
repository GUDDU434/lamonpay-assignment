import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("token"); // Check auth token or user state

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
