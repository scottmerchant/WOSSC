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
// import { Icon, View, Text } from 'native-base';
import {Platform, View} from 'react-native';
import IosStatusBarBackground from './ios-status-bar-background';
import {BottomNavigation} from 'react-native-paper';

const TabsNav = createBottomTabNavigator();

const isIos = Platform.OS == 'ios';

type Props = {
  route: TabsScreenRouteProp;
  navigation: TabsScreenNavigationProp;
};

export default class Tabs extends Component<Props>
{
  state = {
    index: 0,
    routes: [
      { key: 'news', title: 'News', icon: 'newspaper' },
      { key: 'fixtures', title: 'Fixtures', icon: 'format-list-bulleted' },
      { key: 'profile', title: 'Profile', icon: 'account-circle' },
      { key: 'messages', title: 'Messages', icon: 'chat' },
      { key: 'more', title: 'More', icon: 'menu' },
    ],
  };

  _handleIndexChange = (index:number) => this.setState({ index });

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
      <IosStatusBarBackground/>
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
      </View>
    );
  }

  // static navigationOptions = {
  //   title: 'WOSSC Connect',
  // };
  // render()
  // {
  //   return (
  //     <View style={{ flex: 1 }}>
  //       <IosStatusBarBackground/>
  //       <TabsNav.Navigator
  //     // screenOptions={({ route }) =>
  //     // ({
  //     //   tabBarIcon: ({ color, size }) =>
  //     //   {
  //     //     let iconName:string;
  //     //     let type:any = isIos ? 'Ionicons' : 'MaterialIcons';
  //     //     switch(route.name)
  //     //     {
  //     //       case 'News':
  //     //         iconName = 'newspaper';
  //     //         type = 'MaterialCommunityIcons';
  //     //         break;
  //     //       case 'Fixtures':
  //     //         iconName = isIos ? 'ios-list' : 'format-list-bulleted';
  //     //         break;
  //     //       case 'Profile':
  //     //         iconName = isIos ? 'ios-contact' : 'account-circle';
  //     //         break;
  //     //       case 'Messages':
  //     //         iconName = isIos? 'ios-chatboxes' : 'chat';
  //     //         break;
  //     //       default:
  //     //         iconName = isIos ? 'ios-more' : 'menu';
  //     //         break;
  //     //     }
  //     //     // You can return any component that you like here!
  //     //     return <Icon name={iconName} type={type} style={{fontSize: size, color:color}}/>;
  //     //   },
  //     // })}
  //     tabBarOptions={{
  //       activeTintColor: 'green',
  //       inactiveTintColor: 'gray',
  //     }}
  //     >
  //       <TabsNav.Screen name="News" component={News}/>
  //       <TabsNav.Screen name="Fixtures" component={Fixtures}/>
  //       <TabsNav.Screen name="Profile" component={Profile}/>
  //       <TabsNav.Screen name="Messages" component={Messages}/>
  //       <TabsNav.Screen name="More" component={More}/>
  //     </TabsNav.Navigator>
  //    </View>
  //     );
  // }

  componentDidMount(){
    auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.navigation.replace("Login");
      }
   });
  }
}