import axios, { AxiosInstance } from "axios";

export function useApi() {
  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACK_URL,
  });
  return api;
}
