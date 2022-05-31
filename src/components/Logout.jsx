import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Logout() {
   const navigate = useNavigate();

   const logout = () => {
      AuthService.logout();
      navigate("/login");
   };

   return <button onClick={logout}>Logout</button>;
}
