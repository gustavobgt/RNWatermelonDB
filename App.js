import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {PostForm} from './src/components';
import PostList from './src/components/PostList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>POST FORM</Text>
      <PostForm />
      <PostList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default App;
