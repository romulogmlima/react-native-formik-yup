import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../views/Home';
import Login from '../views/Login';
import SignUp from '../views/Signup';

const Stack = createStackNavigator();

export default ({params}) => (
  <SafeAreaView style={style.Container}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'SignUp'} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

const style = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
