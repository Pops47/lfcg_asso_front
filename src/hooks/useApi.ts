import axios, { AxiosInstance } from "axios";

export function useApi() {
  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACK_URL,
  });
  console.log("import.meta.env", import.meta.env);

  return api;
}
