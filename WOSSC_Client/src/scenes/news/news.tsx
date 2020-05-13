import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import ActionBar from '../../components/organisms/ActionBar';
import {connect} from 'react-redux';

class News extends Component<any>
{
  render(){
    return (
      <View>
        <ActionBar title="News"/>
      {/* <Header searchBar rounded style={{marginTop: isIos ? -14 : 0, backgroundColor: '#6b9985'}}>
          <Image source={require('../../assets/images/wossc_logo.png')} style={{ marginTop: isIos ? 0 : 5, marginRight:isIos ? 3 : 7, width: isIos ? 35 : 38, height: isIos ? 40 : 45 }}/>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
      </Header> */}

      {/* <View> */}
        <Text>NEWS</Text>
      {/* </View> */}
      </View>
    );
  }
}

export default connect((state:any) => ({
  state: state
}))(News);