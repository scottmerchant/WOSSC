import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { HomeScreenRouteProp, HomeScreenNavigationProp } from '../../utils/types';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';


type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

export default class Home extends Component<Props>
{
  render()
  {
    return (
    <View>
      <Text>Welcome {firebase.auth().currentUser?.displayName}</Text>
      <Button
      title="Sign Out"
      onPress={() => this.logout()}
    />
    </View>);
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        console.log('user logged out');
        this.props.navigation.replace("Login");
      }
   });
  }

  logout(){
    firebase.auth().signOut();
  }
}