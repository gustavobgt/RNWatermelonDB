import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import withObservables from '@nozbe/with-observables';

import {observePosts} from '../../data/helpers';

const PostList = ({posts}) => {
  if (posts.length < 1) {
    return null;
  }

  return (
    <>
      {posts.map(post => (
        <View key={post.id} style={styles.container}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.body}>{post.body}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    padding: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 12,
  },
});

const enhanceWithPosts = withObservables([], () => ({
  posts: observePosts(),
}));

export default enhanceWithPosts(PostList);
