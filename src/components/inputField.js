import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default ({ value, onChange, placeholder }) => (
  <TextInput
    style={styles.input}
    keyboardType="numeric"
    value={value}
    onChangeText={onChange}
    placeholder={placeholder || ""}
    placeholderTextColor="#888"
  />
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#222",   // dark grey so it shows on black
    color: "#fff",             // text visible
    fontSize: 22,              // large for glove use
    padding: 18,
    marginVertical: 10,
    borderRadius: 10
  }
});