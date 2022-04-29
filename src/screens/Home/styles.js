import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.dark};
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: 20px;
`;