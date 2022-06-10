import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

export default function DeleteUser(props) {
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   const onChange = (e) => {
      setPassword(e.target.value);
   };

   const onSubmit = (e) => {
      e.preventDefault();

      UserService.delete(password).then((res) => {
         props.toggle();
         AuthService.logout();
         navigate("/login");
      });
   };

   return (
      <>
         <form
            onSubmit={onSubmit}
            style={{ width: "32rem" }}
            className="my-6 p-6 rounded-xl bg-slate-200"
         >
            <div>
               <div className="my-4">
                  <p>This cannot be undone.</p>
                  <p>Please type your password to delete your account</p>
                  <br />
                  <input
                     type="password"
                     id="password"
                     name="password"
                     value={password}
                     onChange={onChange}
                     className="w-full mt-1 p-2 rounded"
                  />
               </div>
            </div>
            <button
               type="submit"
               className="w-36 my-2 p-3 rounded bg-slate-400"
            >
               Delete Account
            </button>
         </form>
      </>
   );
}
