import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import RNFirebase from '@react-native-firebase/app';
import { createStore, combineReducers } from 'redux'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
import firestore from '@react-native-firebase/firestore';
import '@react-native-firebase/database';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
import App from './src/App';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

// // Initialize other services on firebase instance
firestore();

// // Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

// // Create store with reducers and initial state
const initialState = { firebase: {}, firestore: {users:[]} }
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase: RNFirebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

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
