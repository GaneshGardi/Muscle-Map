import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://172.26.148.63:8080/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
