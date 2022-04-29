import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.dark};
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: 20px;
  color: ${({theme}) => theme.colors.primary};
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme}) => theme.colors.gray800};
  border-top-width: 1px;
  border-color: ${({theme}) => theme.colors.black};
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountTitle = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.primary};
  margin-left: 16px;
`;