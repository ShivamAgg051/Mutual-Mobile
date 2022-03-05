import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';

const Post = ({route, navigation}) => {
  useEffect(() => {
    console.log('routedata', route);
  });
  return (
    <View style={Styles.screen}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={Styles.card}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: '2%'}}>
          {route.params.post_title}
        </Text>
        <Text style={{fontSize: 12, fontWeight: '500'}}>
          User_Id: {route.params.post_creator}
        </Text>

        <Text style={{fontSize: 16}}> {route.params.post_body}</Text>
      </TouchableOpacity>
    </View>
  );
};
const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: '2%',
  },
  card: {
    backgroundColor: 'lightyellow',
    padding: '5%',
  },
});
export default Post;
