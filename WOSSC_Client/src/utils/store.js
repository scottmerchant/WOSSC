import RNFirebase from '@react-native-firebase/app';
import { createStore, combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase';
import firestore from '@react-native-firebase/firestore';
import '@react-native-firebase/database';
import '@react-native-firebase/auth';
import '@react-native-firebase/app';
import '@react-native-firebase/functions';
import '@react-native-firebase/firestore';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';

const generateStore = () => {
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
  const initialState = { firebase: {}, firestore: { users: [] } }
  const store = createStore(rootReducer, initialState)

  const rrfProps = {
    firebase: RNFirebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  }

  return { store, rrfProps };
}

export default generateStore;