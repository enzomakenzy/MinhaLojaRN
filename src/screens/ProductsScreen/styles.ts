import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 50px 10px 0px 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const CentralContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26px;
`;

export const LogoutButton = styled(TouchableOpacity)`
  padding: 15px 8px;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  font-size: 14px;
`;

export const SearchInput = styled.TextInput`
  width: 100%;
  padding: 10px;
  border-width: 1;
  border-color: #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const ProductItem = styled.View`
  flex-direction: row;
  padding: 15px;
  border-width: 1;
  border-color: #eee;
  border-radius: 8px;
  margin-bottom: 10px;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 5px;
  margin-right: 15px;
`; 

export const ProductDetails = styled.View`
  flex: 1;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ProductCategory = styled.Text`
  font-size: 12px;
  margin-bottom: 5px;
  opacity: 0.7;
`;

export const ProductPrice = styled.Text`
  font-size: 15px;
  font-weight: bold;
`

export const ErrorMessage = styled.Text`
  text-align: center;
  margin-bottom: 20px;
`