import { createStore, compose } from 'redux'
import firebase from '@react-native-firebase/app'
import '@react-native-firebase/auth'
import '@react-native-firebase/database'
import { firestore } from '@react-native-firebase/firestore'
import { reactReduxFirebase } from 'react-redux-firebase'
import rootReducer from './reducer'

export default function configureStore(initialState, history) {
  firestore();

  const createStoreWithMiddleware = compose(
    reactReduxFirebase(firebase, {
      userProfile: 'users',
      useFirestoreForProfile: true,
      enableLogging: false
    })
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer)

  return store
}