import React from 'react';
import {Button} from 'react-native-elements';

const BasicButton = ({width, color = 'blue', ...props}) => (
  <Button {...props} buttonStyle={{width, backgroundColor: color}} />
);

export default BasicButton;
