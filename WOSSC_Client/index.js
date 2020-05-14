import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import '@react-native-firebase/database';
import App from './src/App';
import generateStore from './src/utils/store';

const {store, rrfProps} = generateStore();

class Main extends Component {
  render() {
    console.log("store state: " + JSON.stringify(store.getState()));
    return (
      <ReduxProvider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
      </ReduxProvider>
    );
  }
}

AppRegistry.registerComponent(appName, () => Main);
