import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./firebase/config";

export default function ProtectedRoutes({ children }) {
  const isLogged = auth.currentUser;
  if (!isLogged) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
}
