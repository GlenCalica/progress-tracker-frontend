import axios from "axios";
import authHeader from "./auth-header";
import AuthService from "./auth.service";

const API_URL = "http://localhost:8080/api/users/";

class UserService {
   async get() {
      return AuthService.getCurrentUser();
   }

   async update(data) {
      const user = await this.get();

      const response = axios.put(API_URL + user._id, data, {
         headers: authHeader(),
      });

      return response;
   }

   // async delete() {
   //    const user = await this.get();

   //    const response = axios.delete(API_URL + user._id, {
   //       headers: authHeader(),
   //    });

   //    AuthService.logout();

   //    return response;
   // }
}

export default new UserService();
