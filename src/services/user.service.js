import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = "http://localhost:8080/api/users/";

class UserService {
   async get() {
      return AuthService.getCurrentUser();
   }

   //Only updates user password
   async update(oldPassword, newPassword) {
      const user = await this.get();

      const response = axios.put(
         API_URL + user._id,
         { oldPassword, newPassword },
         {
            headers: authHeader(),
         }
      );

      return response;
   }

   async delete(password) {
      const user = await this.get();

      console.log(authHeader());

      const response = axios.delete(API_URL + user._id, {
         data: { password },
         headers: authHeader(),
      });

      return response;
   }
}

export default new UserService();
