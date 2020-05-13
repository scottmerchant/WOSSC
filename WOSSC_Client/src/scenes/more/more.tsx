import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import ActionBar from '../../components/organisms/ActionBar';


export default class More extends Component<any>
{
  render()
  {
    return (
    <View>
      <ActionBar title="More"/>
      <Text>Standings</Text>
      {/* <FlatList
      contentContainerStyle={styles.container}
      numColumns={2}
      data={['Women','Firsts','Reserves','Thirds']}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => <Button block onPress={() => this.open_web_page(item)}><Text>{item}</Text></Button>}
      /> */}
    </View>
    );
  }

  open_web_page(id:string)
  {
    console.log("open standings for " + id);
  }
}
