import React from 'react';
import {View} from 'react-native';
import {useFormik} from 'formik';

import BasicInput from '../../components/BasicInput';
import BasicButton from '../../components/BasicButton';

import validationSchema from './schema';
import styles from './styles';

const initialValues = {
  email: '',
  password: '',
};

const Login = ({navigation}) => {
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
          placeholder={'Enter e-mail'}
          iconName="envelope"
          iconSize={16}
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
          errorMessage={formik.touched.email && formik.errors.email}
        />
        <BasicInput
          placeholder={'Enter password'}
          iconName="lock"
          iconSize={22}
          onChangeText={formik.handleChange('password')}
          value={formik.values.password}
          errorMessage={formik.touched.password && formik.errors.password}
        />
        <BasicButton
          title={'Login'}
          width={100}
          onPress={formik.handleSubmit}
          disabled={!formik.isValid || formik.isSubmitting}
          loading={formik.isSubmitting}
        />
        <BasicButton
          title={"Don't have an account? Sign Up"}
          onPress={() => navigation.navigate('SignUp')}
          color="transparent"
          type="clear"
        />
      </View>
    </View>
  );
};

export default Login;
