import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View} from 'react-native';
import { Text } from 'react-native-paper';
import ActionBar from '../../components/organisms/ActionBar';

export default class Messages extends Component<any>
{
  render()
  {
    return (
    <View>
      <ActionBar title="Messages"/>
      <Text>MESSAGES!</Text>
    </View>
    );
  }
}