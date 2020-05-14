import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { TabsScreenRouteProp, TabsScreenNavigationProp } from '../../utils/types';
import auth from '@react-native-firebase/auth';
import News from '../news/news';
import Fixtures from '../fixtures/fixtures';
import Messages from '../messages/messages';
import Profile from '../profile/profile';
import More from '../more/more';
import { Platform, View } from 'react-native';
import IosStatusBarBackground from './ios-status-bar-background';
import { BottomNavigation } from 'react-native-paper';
import {getIonIcon, getMaterialCommunityIcon, getMaterialIcon} from '../../utils/Icons';

const isIos = Platform.OS == 'ios';

type Props = {
  route: TabsScreenRouteProp;
  navigation: TabsScreenNavigationProp;
  state: any;
};

export default class Tabs extends Component<Props>
{
  disposeAuthStateChanged : () => void = () => {};

  state = {
    index: 0,
    routes: [
      { key: 'news', title: 'News', icon: getMaterialCommunityIcon('newspaper') },
      { key: 'fixtures', title: 'Fixtures', icon: isIos ? getIonIcon('ios-list') : getMaterialIcon('format-list-bulleted') },
      { key: 'profile', title: 'Profile', icon: isIos ? getIonIcon('ios-contact') : getMaterialIcon('account-circle') },
      { key: 'messages', title: 'Messages', icon: isIos ? getIonIcon('ios-chatboxes') : getMaterialIcon('chat') },
      { key: 'more', title: 'More', icon: isIos ? getIonIcon('ios-more') : getMaterialIcon('menu') },
    ],
  };

  _handleIndexChange = (index: number) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    news: News,
    fixtures: Fixtures,
    profile: Profile,
    messages: Messages,
    more: More,
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <IosStatusBarBackground />
        <BottomNavigation
          shifting={false}
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
      </View>
    );
  }

  componentDidMount() {
    this.disposeAuthStateChanged = auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.navigation.replace('Login');
      }
    });
  }

  componentWillUnmount() {
    this.disposeAuthStateChanged();
  }
}