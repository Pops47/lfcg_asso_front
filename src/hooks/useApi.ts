import axios, { AxiosInstance } from "axios";

export function useApi() {
  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACK_URL,
  });
  console.log("vite_back_url", import.meta.env.VITE_LOCAL_URL);
  return api;
}
