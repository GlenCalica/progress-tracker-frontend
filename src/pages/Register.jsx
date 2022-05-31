import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Register() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
   });

   const { name, email, password, confirmPassword } = formData;

   const navigate = useNavigate();

   //redirect user to "/" if logged in
   useEffect(() => {
      const user = AuthService.getCurrentUser();

      if (user) {
         navigate("/");
      }
   });

   const onChange = (e) => {
      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = (e) => {
      e.preventDefault();

      if (password === confirmPassword) {
         //register, login, and redirect to "/". This cannot be done asynchronously
         AuthService.register(name, email, password).then((res) => {
            AuthService.login(email, password).then((res) => {
               navigate("/");
            });
         });
      }
   };

   return (
      <main className="grid place-content-center h-screen">
         <form
            onSubmit={onSubmit}
            className="h-full p-12 rounded-xl bg-slate-200"
            style={{ width: "32rem" }}
         >
            <h1 className="text-3xl">Create an account</h1>
            <div>
               <div className="my-4">
                  <label htmlFor="name">Name</label>
                  <br />
                  <input
                     type="text"
                     id="name"
                     name="name"
                     value={name}
                     onChange={onChange}
                     className="w-full mt-1 p-2 rounded"
                  />
               </div>

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

               <div className="my-4">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <br />
                  <input
                     type="password"
                     id="confirmPassword"
                     name="confirmPassword"
                     value={confirmPassword}
                     onChange={onChange}
                     className="w-full mt-1 p-2 rounded"
                  />
               </div>
            </div>
            <button
               type="submit"
               className="w-36 my-2 p-3 rounded bg-slate-400"
            >
               Sign Up
            </button>
            <br />
            <NavLink to="/login" className="w-12 text-sm font-medium">
               Already have an account?
            </NavLink>
         </form>
      </main>
   );
}
