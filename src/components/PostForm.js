import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import {savePost} from '../../data/helpers';

export const PostForm = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSavePress = async () => {
    setIsSaving(true);

    await savePost({title, body});

    setTitle('');
    setBody('');

    setIsSaving(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title..."
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <TextInput
        style={styles.input}
        placeholder="Body..."
        onChangeText={text => setBody(text)}
        value={body}
      />
      <Button
        title={isSaving ? 'Posting...' : 'Post'}
        disabled={isSaving}
        onPress={handleSavePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'black'},
  input: {
    color: 'white',
  },
});
