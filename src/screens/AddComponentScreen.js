import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import db from '../database/db';
import LargeButton from '../components/LargeButton';
import InputField from '../components/InputField';
import colors from '../theme/colors';

export default ({ navigation }) => {

  const [name, setName] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const save = () => {
    if (!name || !min || !max) {
      Alert.alert("Invalid Data", "All fields are required!");
      return;
    }
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO components (name,minResistance,maxResistance) VALUES (?,?,?)`,
        [name, min, max],
        () => navigation.goBack()
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Component Name</Text>
      <InputField placeholder="Enter component name" value={name} onChange={setName} />

      <Text style={styles.label}>Min Resistance (Ohms)</Text>
      <InputField placeholder="Min ohms" value={min} onChange={setMin} />

      <Text style={styles.label}>Max Resistance (Ohms)</Text>
      <InputField placeholder="Max ohms" value={max} onChange={setMax} />

      <LargeButton title="Save Component" onPress={save} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20
  },
  label: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 6
  }
});