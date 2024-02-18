import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const InputTextRaul = () => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Enter text"
      onChangeText={(text) => console.log(text)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default InputTextRaul;
