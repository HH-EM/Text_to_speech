import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';


export default function App() {
  const [textToSay, setText] = useState('');

  const speak = () => {
    Speech.speak(textToSay);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Enter text"
        onChangeText={text => setText(text)}
        value={textToSay}
      />
      <Button title="Press to hear text" onPress={speak}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width: 300,
    padding: 10,
    margin: 20,
  }
});
