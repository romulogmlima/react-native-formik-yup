import React from 'react';
import { useFormik } from 'formik';
import { useNavigation } from "@react-navigation/native";
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import validationSchema from "./validationSchema";
import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import { Container, CreateAccountButton, CreateAccountTitle, Icon } from './styles';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const SignUp = () => {
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
            placeholder="Enter your full name"
            onChangeText={handleChange('fullName')}
            value={values.fullName}
            errorMessage={touched.fullName && errors.fullName}
          />
          <Input 
            placeholder="Enter email"
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
          <Input 
            placeholder="Confirm password"
            onChangeText={handleChange('passwordConfirmation')}
            value={values.passwordConfirmation}
            errorMessage={touched.passwordConfirmation && errors.passwordConfirmation}
          />
          <Button 
            title="Sign up"
            onPress={handleSubmit} 
            isDisabled={!isValid || isSubmitting}
            isLoading={isSubmitting}
          />
        </Container>
      </ScrollView>
      <CreateAccountButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="log-in" />
        <CreateAccountTitle>Already have an account? Sign in</CreateAccountTitle>
      </CreateAccountButton>
    </KeyboardAvoidingView>
  );
}

export default SignUp;