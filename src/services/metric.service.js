import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/metrics/";

class MetricService {
   async get() {
      const response = await axios.get(API_URL, { headers: authHeader() });
      return response.data;
   }

   async add(data) {
      const response = await axios.post(API_URL, data, {
         headers: authHeader(),
      });
      return response.data;
   }

   async update(data) {
      const response = axios.put(API_URL, { headers: authHeader() }, data);
      return response;
   }

   async delete(id) {
      const response = axios.delete(API_URL + id, { headers: authHeader() });
      return response;
   }
}

export default new MetricService();
