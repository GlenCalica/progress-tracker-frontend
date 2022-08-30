import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/entries/";

class EntryService {
   async get(metric) {
      const response = await axios.get(API_URL, { headers: authHeader() });
      return response.data.filter((entry) => entry.metric === metric);
   }

   async add(data) {
      const response = await axios.post(API_URL, data, {
         headers: authHeader(),
      });
      return response.data;
   }

   async update(metric, id, data) {
      const entries = await this.get(metric);
      const entry = entries.find((entry) => entry._id === id);

      const response = axios.put(API_URL + entry._id, data, {
         headers: authHeader(),
      });
      return response;
   }

   async delete(metric, id) {
      const entries = await this.get(metric);
      const entry = entries.find((entry) => entry._id === id);

      const response = axios.delete(API_URL + entry._id, {
         headers: authHeader(),
      });
      return response;
   }
}

export default new EntryService();
