import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Data from '../components/data.json';

//const data = Data;
const Item = ({item, navigation}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => {
      navigation.navigate('Post', {
        post_id: item.id,
        post_title: item.title,
        post_body: item.body,
        post_creator: item.userId,
      });
    }}>
    <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: '2%'}}>
      {item.title}
    </Text>
    <Text style={{fontSize: 16}}> {item.body}</Text>
  </TouchableOpacity>
);
const Home = ({navigation}) => {
  let [post, setPost] = useState({});
  //   let fetchPost = async () => {
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/todos/1',
  //     );
  //     const post = await response.json();
  //     console.log(post);
  //   };

  useEffect(() => {
    console.log(Data);
  });

  const renderItem = ({item}) => <Item item={item} navigation={navigation} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
  },
  item: {
    //height: '10%',
    backgroundColor: 'cyan',
    padding: '2%',
    margin: '1%',
  },
  title: {
    fontSize: 32,
    marginBottom: '5%',
  },
});

export default Home;
