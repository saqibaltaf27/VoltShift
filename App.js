import React, {useEffect} from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { initDB } from './src/database/db';
import { SessionProvider } from './src/store/SessionContext';
import colors from './src/theme/colors';

// Root Application Entry
// VoltShift Diagnostic Logger

const App =() => {
  // Initiliaze Local SQLite Database , It runs once when app starts
  useEffect(() => {
    initDB();
  }, []);

  return (
    <SessionProvider>
      <NavigationContainer>
        <StatusBar
        backgroundColor={colors.background}
        barStyle="light-content" />

        <AppNavigator />
      </NavigationContainer>
    </SessionProvider>
  );
};

export default App;
