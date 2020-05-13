import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { TabsScreenRouteProp, TabsScreenNavigationProp } from '../../utils/types';
import auth from '@react-native-firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import News from '../news/news';
import Fixtures from '../fixtures/fixtures';
import Messages from '../messages/messages';
import Profile from '../profile/profile';
import More from '../more/more';
import { Platform, View } from 'react-native';
import IosStatusBarBackground from './ios-status-bar-background';
import { BottomNavigation } from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const TabsNav = createBottomTabNavigator();

const isIos = Platform.OS == 'ios';

let iconType: any = isIos ? 'Ionicons' : 'MaterialIcons';

const getMaterialIcon = (name: string) => {
  return (props: any) =>
    <MaterialIcon name={name} {...props} />;
}

const getMaterialCommunityIcon = (name: string) => {
  return (props: any) =>
    <MaterialCommunityIcon name={name} {...props} />;
}

const getIonIcon = (name: string) => {
  return (props: any) =>
    <IonIcon name={name} {...props} />;
}

type Props = {
  route: TabsScreenRouteProp;
  navigation: TabsScreenNavigationProp;
  state: any;
};

export default class Tabs extends Component<Props>
{
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
    auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.navigation.replace("Login");
      }
    });
  }
}