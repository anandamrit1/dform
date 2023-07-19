import axios from "axios";
import { useMemo } from "react";

export const useAxios = () => {
  const apiClient = axios.create({
    baseURL: "https://flowform-backend-production.up.railway.app",
    withCredentials: true, 
  });
  
  apiClient.interceptors.response.use(response => response, (err) => {
    if (err.response?.status === 401) {
      return window.location.href = "https://flowforms-five.vercel.app/login";
    }
    return Promise.reject(err);
  });

  return useMemo(() => apiClient, [])
}


