import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/entries/";

class EntryService {
   async get(metric) {
      const response = await axios.get(API_URL, { headers: authHeader() });
      return response.data.filter((entry) => entry.metric === metric);
   }

   async add() {}

   async update() {}

   async delete() {}
}

export default new EntryService();
