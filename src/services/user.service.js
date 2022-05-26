import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

function getMetrics() {
   return axios.get(API_URL + "metrics", { headers: authHeader() });
}

function addMetrics() {
   console.log("pass");
}

export default getMetrics;
