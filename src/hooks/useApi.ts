import axios, { AxiosInstance } from "axios";

export function useApi() {
  const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACK_URL,
  });

  return api;

  // api.interceptors.request.use((config) => {
  //   const token = localStorage.getItem("authToken");
  //   token ? (config.headers["Authorization"] = "Bearer " + token) : "";
  //   return config;
  // });

  // api.interceptors.response.use(
  //   (response: AxiosResponse) => response,
  //   async (error: any) => {
  //     if (error.response && error.response.status === 401) {
  //       const originalRequest = error.config;
  //       if (originalRequest && !originalRequest._retry) {
  //         originalRequest._retry = true;
  //       }
  //       const refreshToken = localStorage.getItem("refreshToken");
  //       if (refreshToken) {
  //         try {
  //           const result = await axios.get(
  //             `${import.meta.env.VITE_LOCAL_URL}/auth/refresh-token`,
  //             { headers: { Authorization: "Bearer " + refreshToken } }
  //           );
  //           localStorage.setItem("authToken", result.data.data.authToken);
  //           localStorage.setItem("refreshToken", result.data.data.refreshToken);
  //           originalRequest.headers["Authorization"] =
  //             "Bearer " + result.data.data.authToken;
  //           return axios(originalRequest);
  //         } catch (error) {
  //           location.href = "/";
  //         }
  //       } else {
  //         location.href = "/";
  //       }
  //     }

  //     if (error.response && error.response.status === 500) {
  //     }
  //     return Promise.reject(error);
  //   }
}
