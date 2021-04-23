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
  const handleSubmit = values => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <View style={styles.Container}>
      <View style={styles.Card}>
        <BasicInput
          placeholder={'Enter your full name'}
          iconName="user"
          iconSize={20}
          onChangeText={formik.handleChange('full_name')}
          value={formik.values.full_name}
          errorMessage={formik.touched.full_name && formik.errors.full_name}
          onBlur={formik.handleBlur('full_name')}
        />
        <BasicInput
          placeholder={'Enter email'}
          iconName="envelope"
          iconSize={20}
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
          errorMessage={formik.touched.email && formik.errors.email}
          onBlur={formik.handleBlur('email')}
        />
        <BasicInput
          placeholder={'Enter password'}
          iconName="lock"
          iconSize={24}
          onChangeText={formik.handleChange('password')}
          value={formik.values.password}
          errorMessage={formik.touched.password && formik.errors.password}
          onBlur={formik.handleBlur('password')}
        />
        <BasicInput
          placeholder={'Confirm password'}
          iconName="lock"
          iconSize={24}
          onChangeText={formik.handleChange('password_confirmation')}
          value={formik.values.password_confirmation}
          errorMessage={
            formik.touched.password_confirmation &&
            formik.errors.password_confirmation
          }
          onBlur={formik.handleBlur('password_confirmation')}
        />
        <BasicButton
          title={'Login'}
          width={100}
          onPress={formik.handleSubmit}
          disabled={!formik.isValid || formik.isSubmitting}
          loading={formik.isSubmitting}
        />
        <BasicButton
          title={'Have an account? Login'}
          onPress={() => navigation.navigate('Login')}
          color="transparent"
          type="clear"
        />
      </View>
    </View>
  );
};

export default SignUp;
