import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputField from '../components/inputField';
import colors from '../theme/colors';

export default () => {
  const [source, setSource] = useState("");
  const [terminal, setTerminal] = useState("");

  const calculateDrop = () => {
    const s = Number(source);
    const t = Number(terminal);
    if (!s || !t || s === 0) return "0.00";
    return ((s - t) / s * 100).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Source Voltage</Text>
      <InputField placeholder="Source Voltage" value={source} onChange={setSource} />

      <Text style={styles.label}>Terminal Voltage</Text>
      <InputField placeholder="Terminal Voltage" value={terminal} onChange={setTerminal} />

      <Text style={styles.result}>Voltage Loss: {calculateDrop()} %</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  label: { color: "#fff", fontSize: 18, marginBottom: 6 },
  result: { color: colors.accent, fontSize: 28, marginTop: 20 }
});