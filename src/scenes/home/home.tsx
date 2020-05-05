import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { HomeScreenRouteProp, HomeScreenNavigationProp } from '../../utils/types';

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
      <Text>Hello Home! {}</Text>
      <Button
      title="Go to Login Page"
      onPress={() => this.props.navigation.navigate('Login')}
    />
    </View>);
  }
}