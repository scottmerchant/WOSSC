import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, Button, Text, View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default class Profile extends Component<any>
{
  render()
  {
    let user = auth().currentUser;

    return (
    <View>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Image style={{width: 50, height: 50, borderRadius: 50/2}} source={{uri: user?.photoURL ?? undefined}}/>
        <Text style={{textAlignVertical: "center", padding: 5}}>{user?.displayName}</Text>
      </View>
      <Button title="Sign out" onPress={async () => await this.logout()}/>
    </View>
    );
  }

  async logout(){
    return auth().signOut().then(() => console.log('User signed out!'));;
  }
}