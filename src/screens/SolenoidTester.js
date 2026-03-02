import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import InputField from '../components/inputField';
import WarningText from '../components/WarningText';
import colors from '../theme/colors';

export default ({ route }) => {
  const component = route?.params?.component || { name: "Model-T Solenoid", minResistance: 12, maxResistance: 14 };
  const [resistance, setResistance] = useState("");
  const [continuity, setContinuity] = useState(false);

  const numericResistance = Number(resistance);
  const outOfSpec = resistance && (numericResistance < component.minResistance || numericResistance > component.maxResistance);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{component.name}</Text>
      <Text style={styles.label}>Resistance (Ohms)</Text>
      <InputField placeholder="Enter resistance" value={resistance} onChange={setResistance} />

      <WarningText warning={outOfSpec} okText="WITHIN GOLDEN RANGE" badText="⚠ OUT OF SPEC" />

      <View style={styles.row}>
        <Text style={styles.label}>Continuity</Text>
        <Switch value={continuity} onValueChange={setContinuity} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  title: { fontSize: 26, color: "#fff", marginBottom: 20 },
  label: { fontSize: 18, color: "#fff", marginBottom: 6 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 25 }
});