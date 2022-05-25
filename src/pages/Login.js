import { useState, useEffect } from "react";

export default function Login() {
   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   const { email, password } = formData;

   const onChange = (e) => {
      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <>
         <section>
            <h1>Log in</h1>
         </section>
         <section>
            <form onSubmit={onSubmit}>
               <div>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     value={email}
                     placeholder="Enter your email"
                     onChange={onChange}
                  />
                  <input
                     type="password"
                     id="password"
                     name="password"
                     value={password}
                     placeholder="Enter your password"
                     onChange={onChange}
                  />
               </div>
               <button type="submit">Submit</button>
            </form>
         </section>
      </>
   );
}
