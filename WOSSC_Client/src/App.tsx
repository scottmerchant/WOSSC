import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './scenes/tabs/tabs';
import Login from './scenes/login/login';
import { RootStackParamList } from './utils/types';
import { Provider as PaperProvider } from 'react-native-paper';
import { getCurrentTheme } from './styles/theme';
import { connect } from 'react-redux';

const Stack = createStackNavigator<RootStackParamList>();

class App extends Component<any> {
  static navigationOptions = {
    title: 'WOSSC Connect',
  };
  render() {
    return (
      <PaperProvider theme={getCurrentTheme(this.props.profile)}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }} />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
       </PaperProvider>
    );
  }
}

export default connect((state:any) =>({
  profile: state?.firebase?.profile
}))(App);
