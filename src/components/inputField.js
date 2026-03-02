import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default ({ value, onChange, placeholder, keyboardType = "default", secureTextEntry = false }) => (
  <TextInput
    style={styles.input}
    keyboardType={keyboardType}
    value={value}
    onChangeText={onChange}
    placeholder={placeholder}
    placeholderTextColor="#888"
    secureTextEntry={secureTextEntry}
    autoCapitalize="none"
    autoCorrect={false}
  />
);

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.card,  // Using your theme color
    color: colors.text,            // Using your theme color
    fontSize: 18,
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
    width: '100%',
    // Add elevation for Android shadow
    elevation: 2,
    // Add shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  }
});