import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 25px;
`;

export const ErrorMessage = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.colors.danger};
`; 

export const CustomTextInput = styled(TextInput).attrs(({theme}) => ({
  placeholderTextColor: theme.colors.gray500
}))`
  width: 100%;
  padding: 18px 16px;
  background-color: ${({theme}) => theme.colors.gray800};
  color: ${({theme}) => theme.colors.light};
  border-radius: 5px;
  margin-bottom: 8px;
  font-size: 14px;
`;

