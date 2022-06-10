import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Logout(props) {
   const navigate = useNavigate();

   const logout = () => {
      props.clearData();
      AuthService.logout();
      navigate("/login");
   };

   return (
      <button className="w-36 my-2 p-3 rounded bg-slate-400" onClick={logout}>
         Logout
      </button>
   );
}
