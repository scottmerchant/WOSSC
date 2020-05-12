import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Image, Platform } from 'react-native';
// import {Text, Container, Button } from 'native-base';
import { LoginScreenRouteProp, LoginScreenNavigationProp } from '../../utils/types';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import google_services from '../../../android/app/google-services.json';
import {Appbar, Button } from 'react-native-paper';

GoogleSignin.configure({
  webClientId: google_services.client[0].oauth_client[2].client_id,
  offlineAccess: true
});

type Props = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

const isIos = Platform.OS === 'ios';

export default class Login extends Component<Props>
{
  render() {
    return (
      <View>
        <Appbar.Header>
          <Image
          source={require('../../assets/images/wossc_logo.png')}
          style={{
            marginTop: isIos ? 0 : 5,
            marginRight:isIos ? 3 : 0,
            width: isIos ? 35 : 38,
            height: isIos ? 40 : 45 }}/>
          <Appbar.Content title="WOSSC Connect" subtitle="please sign in"/>
        </Appbar.Header>
        <Button onPress={() => this.sign_in_with_google()} >Sign in with Google</Button>
      </View>);
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.replace("Tabs");
      }
    });
  }

  async sign_in_with_google() {
    const { idToken } = await GoogleSignin.signIn();

    if (idToken) {
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    }
  }
}