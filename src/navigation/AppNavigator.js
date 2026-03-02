import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import all screens
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import AddComponentScreen from '../screens/AddComponentScreen';
import SessionScreen from '../screens/SessionScreen';
import ComponentSelectScreen from '../screens/ComponentSelectScreen';
import SolenoidTester from '../screens/SolenoidTester';
import VoltageDrop from '../screens/VoltageDrop';
import FluidHealth from '../screens/FluidHealth';
import PdfExport from '../screens/PdfExport';
import ReportScreen from '../screens/ReportScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Library" component={LibraryScreen} />
      <Stack.Screen name="AddComponent" component={AddComponentScreen} />
      <Stack.Screen name="Session" component={SessionScreen} />
      <Stack.Screen name="ComponentSelect" component={ComponentSelectScreen} />
      <Stack.Screen name="SolenoidTester" component={SolenoidTester} />
      <Stack.Screen name="VoltageDrop" component={VoltageDrop} />
      <Stack.Screen name="FluidHealth" component={FluidHealth} />
      <Stack.Screen name="PdfExport" component={PdfExport} />
      <Stack.Screen name="Report" component={ReportScreen} />
    </Stack.Navigator>
  );
}