import React, { useEffect, useState, useContext } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import db from '../database/db';
import { SessionContext } from '../store/SessionContext';
import colors from '../theme/colors';

export default ({ navigation }) => {

  const { session } = useContext(SessionContext);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        "SELECT * FROM components",
        [],
        (_, res) => setComponents(res.rows.raw())
      );
    });
  }, []);

  const selectComponent = (component) => {
    navigation.navigate("SolenoidTester", { component, session });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={components}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => selectComponent(item)}
            style={styles.item}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No components found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  item: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: "#222"
  },
  itemText: { color: "#fff", fontSize: 20 },
  empty: { color: "#fff", fontSize: 18, textAlign: "center", marginTop: 40 }
});