import React from 'react';
import {Button} from 'react-native-elements';

const FormButton = ({title, buttonType, buttonColor, ...rest}) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    buttonStyle={{borderColor: buttonColor, borderRadius: 15, marginLeft:30, marginRight: 30}}
    titleStyle={{color: buttonColor}}
  />
);

export default FormButton;
