import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { SessionContext } from '../store/SessionContext';
import LargeButton from '../components/LargeButton';
import InputField from '../components/inputField';
import colors from '../theme/colors';

export default ({ navigation }) => {

  const { setSession } = useContext(SessionContext);
  const [vin, setVin] = useState("");

  const start = () => {
    if (!vin) return;
    setSession({ vin, date: new Date().toLocaleString() });
    navigation.navigate("ComponentSelectScreen");
  };

  return (
    <View style={styles.container}>
      <InputField
        placeholder="Enter Vehicle VIN"
        value={vin}
        onChange={setVin}
      />
      <LargeButton title="Start Session" onPress={start} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center'
  }
});