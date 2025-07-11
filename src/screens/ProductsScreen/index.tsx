import { useState, useEffect } from "react"

import { Container, CentralContainer, Header, Title, LogoutButton, TextButton, SearchInput, ProductItem, ProductDetails, ProductTitle, ProductImage, ProductCategory, ProductPrice, ErrorMessage } from "./styles"

import { getAllProducts } from "../../services/productsService"
import { ProductAPI } from "../../types/api"
import { ActivityIndicator, FlatList, Text } from "react-native";

interface ProductsScreenProps {
  toLogout: () => void;
}

export function ProductsScreen({ toLogout }: ProductsScreenProps) {
  const [ productsList, setProductsList ] = useState<ProductAPI[]>([]);
  const [ filtersProducts, setFiltersProducts ] = useState<ProductAPI[]>([]);
  const [ loadingProducts, setLoadingProducts ] = useState(true);
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ searchTerm, setSearchTerm ] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      setLoadingProducts(true);
      setErrorMessage("");
      try {
        const products = await getAllProducts();

        setProductsList(products);
        setFiltersProducts(products);
      } catch (error: any) {
        setErrorMessage(error.message || "Não foi possível carregar os produtos")

        if (error.message.includes("Sessão expirada")) {
          toLogout();
        }
      } finally {
        setLoadingProducts(false);
      }
    }

    loadProducts();
  }, [toLogout]);

  const renderProductItem = ({ item }: { item: ProductAPI }) => (
    <ProductItem>
      <ProductImage source={{ uri: item.image }} />
      <ProductDetails>
        <ProductTitle>{item.title}</ProductTitle>
        <ProductCategory>{item.category}</ProductCategory>
        <ProductPrice>{item.price}</ProductPrice>
      </ProductDetails>
    </ProductItem>
  )

  if (loadingProducts) {
    return (
      <CentralContainer>
        <ActivityIndicator size="large" />
        <Text>Carregando produtos...</Text>
      </CentralContainer>
    )
  }

  if (errorMessage) {
    return (
      <CentralContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <LogoutButton>
          <TextButton>Fazer Logout</TextButton>
        </LogoutButton>
      </CentralContainer>
    )
  }

  return (
    <Container>
      <Header>
        <Title>Produtos</Title>
        <LogoutButton onPress={toLogout}>
          <TextButton>Sair</TextButton>
        </LogoutButton>
      </Header>

      <SearchInput 
        placeholder="Pesquisar produtos..." 
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <FlatList
        data={filtersProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Container>
  )
}