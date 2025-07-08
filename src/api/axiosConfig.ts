import axios from "axios";
import { getToken, deleteToken } from "../services/storageService";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.request.use(
  async (config) => {
  const token = await getToken();
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response, 
  async (error) => {
    if (error.response && error.response.status === 401) {
      await deleteToken();
      console.warn("Token de autenticação expirado ou inválido. Realiza o login novamente.");
    }

    return Promise.reject(error);
  }
)

export default api;
