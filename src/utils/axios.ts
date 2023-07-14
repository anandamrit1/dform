import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:5200",
  withCredentials: true, 
});

apiClient.interceptors.response.use(response => response, (err) => {
  if (err.response?.status === 401) {
    return window.location.href = "http://localhost:3000/login";
  }
  return Promise.reject(err);
});


