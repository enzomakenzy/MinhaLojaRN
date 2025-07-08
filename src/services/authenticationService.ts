import api from "../api/axiosConfig";
import { LoginCredentials, LoginResponseAPI } from "../types/api";

export async function realizarLogin(credentials: LoginCredentials,): Promise<LoginResponseAPI> {
  try {
    const response = await api.post<LoginResponseAPI>("auth/login", {
      username: credentials.user,
      passowrd: credentials.password
    });

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      throw new Error("Credenciais inválidas. Verifique seu usuário e senha");
    }

    throw new Error("Erro ao conectar com o servidor. Tente novamente mais tarde.");
  }
}