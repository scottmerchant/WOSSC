'use strict'
import React, {Component} from 'react';
import {View, StyleSheet, Platform} from 'react-native';

export default class IosStatusBarBackground extends Component<any>{
  render(){
    return(
      <View style={[styles.statusBarBackground, this.props.style || {}]}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: 'transparent',
  }

});