import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import {Appbar } from 'react-native-paper';

const isIos = Platform.OS === 'ios';

type Props = {
} & DefaultProps;

type DefaultProps = Readonly<typeof defaultProps>;

const defaultProps = {
  subtitle: '' as string,
  title: '' as string
};

export default class ActionBar extends Component<Props>
{
  static defaultProps = defaultProps;

  render() {
    return (<Appbar.Header>
          <Image
          source={require('../../assets/images/wossc_logo.png')}
          style={{
            marginTop: isIos ? 0 : 5,
            marginRight:isIos ? 3 : 0,
            width: isIos ? 35 : 38,
            height: isIos ? 40 : 45 }}/>
          <Appbar.Content title={this.props.title} subtitle={this.props.subtitle}/>
        </Appbar.Header>);
  }
}