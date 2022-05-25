import { useState, useEffect } from "react";

export default function Register() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      password2: "",
   });

   const { name, email, password, password2 } = formData;

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
            <h1>Create an account</h1>
         </section>
         <section>
            <form onSubmit={onSubmit}>
               <div>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     value={name}
                     placeholder="Enter your name"
                     onChange={onChange}
                  />
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
                  <input
                     type="password2"
                     id="password2"
                     name="password2"
                     value={password2}
                     placeholder="Confirm password"
                     onChange={onChange}
                  />
               </div>
               <button type="submit">Submit</button>
            </form>
         </section>
      </>
   );
}
