import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

export default function PdfExport() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PDF Export Screen Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' },
  text: { color: '#fff', fontSize: 22 }
});