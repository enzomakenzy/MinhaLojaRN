import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`; 

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 10px;
  border-width: 1;
  border-color: #ccc;
  border-radius: 5px;
  margin-bottom: 10;
`;  

export const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.58
})`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
`;

export const ErrorMessage = styled.Text`
  margin-top: 15px;
  text-align: center;
`;