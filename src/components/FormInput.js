import React from 'react';
import {Input} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FormInput = ({
  iconName,
  iconColor,
  iconSize,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    <Input
      {...rest}
      leftIcon={<Icon name={iconName} size={iconSize} color={iconColor} />}
      leftIconContainerStyle={styles.iconStyle}
      placeholderTextColor="#CDC9C9"
      name={name}
      placeholder={placeholder}
      style={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 5,
  },
  iconStyle: {
    marginRight: 10,
    marginLeft: 5,
  },
});

export default FormInput;
