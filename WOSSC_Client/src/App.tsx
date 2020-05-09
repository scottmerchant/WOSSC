/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { StyleProvider } from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import Tabs from './scenes/tabs/tabs';
import Login from './scenes/login/login';
import {RootStackParamList} from './utils/types';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

const Stack = createStackNavigator<RootStackParamList>();

// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

const firebaseCredentials = Platform.select({
  ios: 'https://invertase.link/firebase-ios',
  android: 'https://invertase.link/firebase-android',
});

export default class App extends Component<any> {
  static navigationOptions = {
    title: 'WOSSC Connect',
  };

  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
  </NavigationContainer>
  </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
