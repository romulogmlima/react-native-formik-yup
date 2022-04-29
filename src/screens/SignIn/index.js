import React from 'react';
import { useFormik } from 'formik';
import { useNavigation } from "@react-navigation/native";
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import validationSchema from "./validationSchema";
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import { Container, CreateAccountButton, CreateAccountTitle, Icon } from './styles';

const initialValues = {
  email: '',
  password: '',
};

const SignIn = () => {
  const navigation = useNavigation();

  const onSubmit = values => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    isSubmitting,
    isValid,
    handleSubmit,
  } = formik;

  return (
    <KeyboardAvoidingView 
      enabled style={{flex: 1}} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView 
        keyboardShouldPersistTaps="handled" 
        contentContainerStyle={{flex: 1}}
      >
        <Container>
          <Input 
            placeholder="Enter e-mail"
            onChangeText={handleChange('email')}
            value={values.email}
            errorMessage={touched.email && errors.email}
          />
          <Input 
            placeholder="Enter password"
            onChangeText={handleChange('password')}
            value={values.password}
            errorMessage={touched.password && errors.password}
          />
          <Button 
            title="Sign in"
            onPress={handleSubmit} 
            isDisabled={!isValid || isSubmitting}
            isLoading={isSubmitting}
          />
        </Container>
      </ScrollView>
      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" />
        <CreateAccountTitle>Don't have an account? Sign Up</CreateAccountTitle>
      </CreateAccountButton>
    </KeyboardAvoidingView>
  );
}

export default SignIn;
