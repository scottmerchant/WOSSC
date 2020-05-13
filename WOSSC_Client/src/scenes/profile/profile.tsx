import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import { Button, Text, Switch } from 'react-native-paper';
import ActionBar from '../../components/organisms/ActionBar';
import {connect} from 'react-redux';
import {getCurrentTheme} from '../../styles/theme'

class Profile extends Component<any>
{
  render() {
    const darkThemEnabled = this.props.profile?.settings?.isDarkThemeEnabled ?? false;
    const theme = getCurrentTheme(this.props.profile);
    return (
      <View>
        <ActionBar title="Profile" />
        <View style={{ flexDirection: 'row', padding: 5 }}>
          <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={{ uri: this.props.profile?.avatarUrl ?? undefined }} />
          <Text style={{ textAlignVertical: "center", padding: 5 }}>{this.props.profile?.displayName}</Text>
        </View>
        <Switch value={darkThemEnabled} onValueChange={this.setDarkMode}/>
        <Button mode='outlined' color={theme.colors.error} onPress={async () => await this.logout()}>Sign out</Button>
      </View>
    );
  }

  async setDarkMode(value:boolean){
    (firebase as any).updateProfile({settings: {isDarkThemeEnabled: value}});
  }

  async logout() {
    return await auth().signOut().then(() => console.log('User signed out!'));;
  }
}

export default connect((state:any) => ({
  profile: state.firebase?.profile ?? null
}))(Profile);