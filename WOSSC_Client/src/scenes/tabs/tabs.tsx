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
import { Icon } from 'native-base';
import {Platform} from 'react-native';
import 'react-native-vector-icons';

const TabsNav = createBottomTabNavigator();

const os = Platform.OS;

type Props = {
  route: TabsScreenRouteProp;
  navigation: TabsScreenNavigationProp;
};

export default class Tabs extends Component<Props>
{
  static navigationOptions = {
    title: 'WOSSC Connect',
  };
  render()
  {
    return (
      <TabsNav.Navigator
      screenOptions={({ route }) =>
      ({
        tabBarIcon: ({ color, size }) =>
        {
          let iconName:string;
          switch(route.name)
          {
            case 'News':
              iconName = 'star';
              break;
            case 'Fixtures':
              iconName = os === 'ios' ? 'ios-list' : 'event';
              break;
            case 'Profile':
              iconName = os === 'ios' ? 'ios-contact' : 'account-circle';
              break;
            case 'Messages':
              iconName = os === 'ios' ? 'ios-chatboxes' : 'chat';
              break;
            default:
              iconName = os === 'ios' ? 'ios-more' : 'menu';
              break;
          }
          // You can return any component that you like here!
          return <Icon name={iconName} style={{fontSize: size, color:color}}/>;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
      >
        <TabsNav.Screen name="News" component={News}/>
        <TabsNav.Screen name="Fixtures" component={Fixtures}/>
        <TabsNav.Screen name="Profile" component={Profile}/>
        <TabsNav.Screen name="Messages" component={Messages}/>
        <TabsNav.Screen name="More" component={More}/>
      </TabsNav.Navigator>
      );
  }

  componentDidMount(){
    auth().onAuthStateChanged((user) => {
      if (!user) {
        this.props.navigation.replace("Login");
      }
   });
  }
}