import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import { Button, Text, View} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

export default class More extends Component<any>
{
  render()
  {
    return (
    <View style={styles.view}>
      <Text>Standings</Text>
      <FlatList
      contentContainerStyle={styles.container}
      numColumns={2}
      data={['Women','Firsts','Reserves','Thirds']}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => <Button block onPress={() => this.open_web_page(item)}><Text>{item}</Text></Button>}
      />
    </View>
    );
  }

  open_web_page(id:string)
  {
    console.log("open standings for " + id);
  }
}

var styles = StyleSheet.create({
  view:{
    alignItems: "center"
  },
  item: {
    width: 150,
    margin: 5
  },
  container:{
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10
  }
});
