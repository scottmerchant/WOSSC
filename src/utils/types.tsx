import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Tabs: undefined;
  Login: undefined;
};

export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type TabsScreenRouteProp = RouteProp<RootStackParamList, 'Tabs'>;

export type TabsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Tabs'
>;