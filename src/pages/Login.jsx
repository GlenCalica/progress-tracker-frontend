import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import AuthService from "../services/auth.service";
import MetricService from "../services/metric.service";

export default function Login(props) {
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   const { email, password } = formData;

   const navigate = useNavigate();

   const onChange = (e) => {
      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = (e) => {
      e.preventDefault();

      AuthService.login(email, password).then(
         (res) => {
            const user = AuthService.getCurrentUser();
            props.setUser(user);
            MetricService.get().then((res) => {
               props.setMetrics(res);
            });
            navigate("/");
         },
         (err) => {
            console.log(err);
         }
      );
   };

   return (
      <main className="grid place-content-center h-screen">
         <form
            onSubmit={onSubmit}
            className="h-full p-12 rounded-xl bg-slate-200"
            style={{ width: "32rem" }}
         >
            <h1 className="text-3xl">Log in</h1>
            <div>
               <div className="my-4">
                  <label htmlFor="email">Email</label>
                  <br />
                  <input
                     type="email"
                     id="email"
                     name="email"
                     value={email}
                     onChange={onChange}
                     className="w-full mt-1 p-2 rounded"
                  />
               </div>
               <div className="my-4">
                  <label htmlFor="password">Password</label>
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
               Log In
            </button>
            <br />
            <NavLink to="/register" className="w-12 text-sm font-medium">
               Don't have an account?
            </NavLink>
         </form>
      </main>
   );
}
