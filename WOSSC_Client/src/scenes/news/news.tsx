import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {Image, Platform} from 'react-native';
import {Container, Header, Button, Text, Content, Icon, Input, Item} from 'native-base';

const isIos = Platform.OS === 'ios';

export default class News extends Component<any>
{


  render()
  {
    return (
      <Container>
      <Header searchBar rounded style={{marginTop: isIos ? -14 : 0, backgroundColor: '#6b9985'}}>
          <Image source={require('../../assets/images/wossc_logo.png')} style={{ marginTop: isIos ? 0 : 5, marginRight:isIos ? 3 : 7, width: isIos ? 35 : 38, height: isIos ? 40 : 45 }}/>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
      </Header>

      <Content>
        <Text>NEWS</Text>
      </Content>
  </Container>
    );
  }
}