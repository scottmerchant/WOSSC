import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import ActionBar from '../../components/organisms/ActionBar';
import { connect } from 'react-redux';
import FabGroup from '../../components/molecules/FabGroup';
import {getMaterialIcon, getIonIcon} from '../../utils/Icons';

class News extends Component<any>
{
  actions = [
    { icon: 'star', label: 'News', onPress: () => console.log('New News Post') },
    { icon: getMaterialIcon('event'), label: 'Event', onPress: () => console.log('New Event') }];

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ActionBar title="News" />
        <View style={{ flex: 1 }}>
          <Text>NEWS</Text>
          <FabGroup actions={this.actions} visible={true} />
        </View>
      </View>
    );
  }
}

export default connect((state: any) => ({
  state: state
}))(News);