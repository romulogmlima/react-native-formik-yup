import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  background-color: ${({theme, disabled}) => 
    disabled ? theme.colors.gray500 : theme.colors.primary
  };
  border-radius: 5px;
  padding: 18px;
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.dark};
  font-weight: bold;
`;

export const CustomActivityIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
  size: 25,
  color: theme.colors.dark,
}))``;