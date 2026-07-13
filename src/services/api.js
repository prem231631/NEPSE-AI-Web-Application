import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8001", // Backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;