import React, {Fragment} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: Yup.string()
    .label('Password')
    .required()
    .min(4, 'Password must have more than 4 characters '),
});

export default class Login extends React.Component {
  goToSignup = () => this.props.navigation.navigate('Signup');

  handleSubmit = (values) => {
    if (values.email.length > 0 && values.password.length > 0) {
      setTimeout(() => {
        this.props.navigation.navigate('App');
      }, 3000);
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => {
            this.handleSubmit(values);
          }}
          validationSchema={validationSchema}>
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            isValid,
            touched,
            handleBlur,
            isSubmitting,
          }) => (
            <Fragment>
              <FormInput
                name="email"
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder="Enter email"
                autoCapitalize="none"
                iconName="envelope"
                iconColor="#2C384A"
                iconSize={18}
                onBlur={handleBlur('email')}
                autoFocus
              />
              <ErrorMessage errorValue={touched.email && errors.email} />
              <FormInput
                name="password"
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Enter password"
                secureTextEntry
                iconName="lock"
                iconColor="#2C384A"
                iconSize={24}
                onBlur={handleBlur('password')}
              />
              <ErrorMessage errorValue={touched.password && errors.password} />
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType="solid"
                  onPress={handleSubmit}
                  title="LOGIN"
                  buttonColor="#fff"
                  disabled={!isValid || isSubmitting}
                  loading={isSubmitting}
                />
              </View>
            </Fragment>
          )}
        </Formik>
        <Button
          title="Don't have an account? Sign Up"
          onPress={this.goToSignup}
          titleStyle={{
            color: '#039BE5',
          }}
          type='clear'
        />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 10,
  },
  buttonContainer: {
    margin: 25,
  },
});
