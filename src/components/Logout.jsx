import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Logout() {
   const navigate = useNavigate();

   const logout = () => {
      AuthService.logout();
      navigate("/login");
   };

   return (
      <button className="w-36 my-2 p-3 rounded bg-slate-400" onClick={logout}>
         Logout
      </button>
   );
}
