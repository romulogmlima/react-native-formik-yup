import React from 'react';
import {View} from 'react-native';
import {useFormik} from 'formik';

import BasicInput from '../../components/BasicInput';
import BasicButton from '../../components/BasicButton';

import validationSchema from './schema';
import styles from './styles';

const initialValues = {
  full_name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const SignUp = ({navigation}) => {
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
    <View style={styles.Container}>
      <BasicInput
        placeholder={'Enter your full name'}
        iconName="user"
        iconSize={20}
        onChangeText={handleChange('full_name')}
        value={values.full_name}
        errorMessage={touched.full_name && errors.full_name}
      />
      <BasicInput
        placeholder={'Enter email'}
        iconName="envelope"
        iconSize={20}
        onChangeText={handleChange('email')}
        value={values.email}
        errorMessage={touched.email && errors.email}
      />
      <BasicInput
        placeholder={'Enter password'}
        iconName="lock"
        iconSize={24}
        secureTextEntry
        onChangeText={handleChange('password')}
        value={values.password}
        errorMessage={touched.password && errors.password}
      />
      <BasicInput
        placeholder={'Confirm password'}
        iconName="lock"
        iconSize={24}
        secureTextEntry
        onChangeText={handleChange('password_confirmation')}
        value={values.password_confirmation}
        errorMessage={
          touched.password_confirmation && errors.password_confirmation
        }
      />
      <BasicButton
        title={'Sign up'}
        width={200}
        onPress={handleSubmit}
        disabled={!isValid || isSubmitting}
        loading={isSubmitting}
      />
      <View style={styles.SubContainerButton}>
        <BasicButton
          title={'Already have an account? Login'}
          onPress={() => navigation.navigate('Login')}
          color="transparent"
          type="clear"
        />
      </View>
    </View>
  );
};

export default SignUp;
