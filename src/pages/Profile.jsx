import { useEffect } from "react";
import { useState } from "react";

import UpdateUserPassword from "../components/UpdateUserPassword";
import Logout from "../components/Logout";
import DeleteUser from "../components/DeleteUser";
import PopupWrapper from "../components/PopupWrapper";

import UserService from "../services/user.service";

export default function Profile(props) {
   //for DeleteUser
   const [popup, setPopup] = useState(false);

   const togglePopup = () => {
      setPopup(!popup);
   };

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
         <Logout clearData={props.clearData} />

         <button
            onClick={togglePopup}
            className="w-36 my-2 p-3 rounded bg-slate-400"
         >
            Delete Account
         </button>
         <PopupWrapper
            show={popup}
            toggle={togglePopup}
            item={<DeleteUser toggle={togglePopup} />}
         />
      </>
   );
}
