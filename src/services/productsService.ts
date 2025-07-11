import api from "../api/axiosConfig";
import { ProductAPI } from "../types/api";

export async function getAllProducts(): Promise<ProductAPI[]> {
  try {
    const response = await api.get<ProductAPI[]>("products");
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || "Erro ao buscar produtos")
  }
}