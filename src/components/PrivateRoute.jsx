import AuthService from "../services/auth.service";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
   const isLoggedIn = AuthService.getCurrentUser();
   return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
