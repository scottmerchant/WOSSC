import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { LoginScreenRouteProp, LoginScreenNavigationProp } from '../../utils/types';

type Props = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

export default class Login extends Component<Props>
{
  render()
  {
    return (
    <View>
      <Text>Hello Login! {}</Text>
      <Button
      title="Go to Home Page"
      onPress={() => this.props.navigation.navigate('Home')}
    />
    </View>);
  }
}