import { useEffect } from "react";
import authService from "../services/auth.service";

export default function Profile() {
   useEffect(() => {
      console.log(authService.getCurrentUser());
   })

   return (<h1>Profile</h1>);
}
