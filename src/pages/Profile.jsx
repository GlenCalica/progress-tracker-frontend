import { useEffect } from "react";
import { useState } from "react";
import UserService from "../services/user.service";

export default function Profile() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
   });

   const { name, email, currentPassword, newPassword, confirmNewPassword } =
      formData;

   const onChange = (e) => {
      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = (e) => {
      e.preventDefault();

      if (newPassword === confirmNewPassword) {
         UserService.update(currentPassword, newPassword);
         console.log("updated");
      } else {
         console.log("passwords do not match");
      }
   };

   useEffect(() => {
      UserService.get().then((res) => {
         setFormData((prevState) => ({
            ...prevState,
            name: res.name,
            email: res.email,
         }));
      });
   }, []);

   return (
      <>
         <h1>Profile</h1>
         <form
            onSubmit={onSubmit}
            style={{ width: "32rem" }}
            className="p-6 rounded-xl bg-slate-200"
         >
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
                     readOnly
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
                     readOnly
                  />
               </div>

               <div className="my-4">
                  <label htmlFor="currentPassword">Current Password</label>
                  <br />
                  <input
                     type="password"
                     id="currentPassword"
                     name="currentPassword"
                     value={currentPassword}
                     onChange={onChange}
                     className="w-full mt-1 p-2 rounded"
                  />
               </div>

               <div className="my-4">
                  <label htmlFor="newPassword">New Password</label>
                  <br />
                  <input
                     type="password"
                     id="newPassword"
                     name="newPassword"
                     value={newPassword}
                     onChange={onChange}
                     className="w-full mt-1 p-2 rounded"
                  />
               </div>

               <div className="my-4">
                  <label htmlFor="confirmNewPassword">
                     Confirm New Password
                  </label>
                  <br />
                  <input
                     type="password"
                     id="confirmNewPassword"
                     name="confirmNewPassword"
                     value={confirmNewPassword}
                     onChange={onChange}
                     className="w-full mt-1 p-2 rounded"
                  />
               </div>
            </div>
            <button
               type="submit"
               className="w-36 my-2 p-3 rounded bg-slate-400"
            >
               Save
            </button>
            <br />
         </form>
      </>
   );
}
