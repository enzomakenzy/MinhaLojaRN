import { use, useState } from "react";

import { realizeLogin } from "../../services/authenticationService";
import { saveToken } from "../../services/storageService";

import { Container, Title, Input, Button, ButtonText, ErrorMessage } from "./styles"
import { ActivityIndicator } from "react-native";

interface LoginScreenProps {
  loginSucessful: () => void;
}

export function LoginScreen({ loginSucessful }: LoginScreenProps) {
  const [ userName, setUserName ] = useState("");
  const [ userPassword, setUserPassword ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await realizeLogin({ user: userName, password: userPassword });
      await saveToken(response.token);
      loginSucessful();
    } catch (error: any) {
      setErrorMessage(error.message || "Erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Title>Login</Title>

      <Input 
        placeholder="Nome de usuário"
        value={userName}
        onChangeText={setUserName}
        autoCapitalize="none"
      />

      <Input 
        placeholder="senha"
        value={userPassword}
        onChangeText={setUserPassword}
        secureTextEntry
      />

      { loading ? (
          <ActivityIndicator size="large" />
        ) 
          : 
        (
          <Button
            onPress={handleLogin}
            disabled={!userName || !userPassword}
          >
            <ButtonText>Entrar</ButtonText>
          </Button>
        )  
      }

      { errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null }
    </Container>
  );
}