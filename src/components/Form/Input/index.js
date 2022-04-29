import React from 'react';
import { Container, CustomTextInput, ErrorMessage } from './styles';

const Input = ({errorMessage, ...otherProps}) => (
  <Container>
    <CustomTextInput {...otherProps}/>
    {errorMessage && (<ErrorMessage>{errorMessage}</ErrorMessage>)}
  </Container>
);

export default Input;
