import React from 'react';
import { Container, Title, CustomActivityIndicator } from './styles';

const Button = ({title, isLoading, isDisabled, ...otherProps}) => (
  <Container disabled={isDisabled} {...otherProps}>
    { isLoading ? (<CustomActivityIndicator />) :(<Title>{title}</Title>)}
  </Container>
);

export default Button;
