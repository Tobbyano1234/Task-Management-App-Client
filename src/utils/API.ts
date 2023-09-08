import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { store } from "../redux/store";

const instance: AxiosInstance = axios.create({
  baseURL: "https://famwork-web-service.onrender.com/api/v1",
  // baseURL: "https://laughing-succotash-7j7jqr7xg6vfrgrv-4500.app.github.dev/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: 'application/json',
  },
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const authState = store.getState().auth;
  const accessToken: string | null = authState.accessToken;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default instance;