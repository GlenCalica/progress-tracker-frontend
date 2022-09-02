import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://progress-tracker-mern.herokuapp.com/api/metrics/";

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

   async update(name, data) {
      const metrics = await this.get();

      const metric = metrics.find((metric) => {
         return metric.name === name;
      });

      const response = axios.put(API_URL + metric._id, data, {
         headers: authHeader(),
      });
      return response;
   }

   async delete(name) {
      const metrics = await this.get();

      const metric = metrics.find((metric) => {
         return metric.name === name;
      });

      const response = axios.delete(API_URL + metric._id, {
         headers: authHeader(),
      });

      return response;
   }
}

export default new MetricService();
