import { useEffect } from "react";
import { useState } from "react";

import UpdateUserPassword from "../components/UpdateUserPassword";
import DeleteUser from "../components/DeleteUser";

import UserService from "../services/user.service";

export default function Profile() {
   const [userDetails, setUserDetails] = useState({
      name: "",
      email: "",
   });

   const { name, email } = userDetails;

   useEffect(() => {
      UserService.get().then((res) => {
         setUserDetails({
            name: res.name,
            email: res.email,
         });
      });
   }, []);

   return (
      <>
         <h1>Profile</h1>
         <p>Name: {name}</p>
         <p>Email: {email}</p>

         <UpdateUserPassword />
         <DeleteUser />
      </>
   );
}
