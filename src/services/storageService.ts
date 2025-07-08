import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "@minhalojarn:token";

export async function saveToken(token: string): Promise<void> {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error("Erro ao salvar token:", error);
    throw new Error("Problema ao armazenar suas informações de login");
  }
}

export async function getToken(): Promise<string | null> {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return token;
  } catch (error) {
    console.error("Erro ao obter token: ", error);
    return null;
  }
}

export async function deleteToken(): Promise<void> {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error("Erro ao remover token");
  }
}