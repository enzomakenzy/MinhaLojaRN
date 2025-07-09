import { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

import { LoginScreen } from "./src/screens/LoginScreen";
import { ProductsScreen } from "./src/screen/ProductsScreen"

import { getToken, deleteToken } from "./src/services/storageService";
import api from "./src/api/axiosConfig";

export default function App() {
  const [ authenticated, setAuthenticated ] = useState<Boolean | null>(null);
  const [ initialLoading, setInitialLoading ] = useState(true);

  useEffect(() => { 
    const checkAuthentication = async () => {
      const token = await getToken();

      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      setInitialLoading(false);
    }

    checkAuthentication();
  }, [])

  const handleLogout = async () => {
    await deleteToken();

    delete api.defaults.headers.common["Authorization"];
    setAuthenticated(false);
  }

  if (initialLoading) {
    return (
      <CentralContainer>
        <ActivityIndicator size="large" />
      </CentralContainer>
    )
  }

  return (
    authenticated ? <ProductsScreen toLogout={handleLogout} /> : <LoginScreen loginSucessful={() => setAuthenticated(true)} />
  );
}

const CentralContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
