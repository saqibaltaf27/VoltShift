import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/HomeScreen';
import Library from '../screens/LibraryScreen';
import AddComponent from '../screens/LibraryScreen';
import Session from '../screens/SessionScreen';

import SolenoidTester from '../screens/SolenoidTester';
import VoltageDrop from '../screens/VoltageDrop';
import FuildHealth from '../screens/FluidHealth';
import Report from '../screens/ReportScreen';

const Stack = createNativeStackNavigator();
export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="AddComponent" component={AddComponent} />
        <Stack.Screen name="Session" component={Session} />
        <Stack.Screen name="SolenoidTester" component={SolenoidTester} />
        <Stack.Screen name="VoltageDrop" component={VoltageDrop} />
        <Stack.Screen name="FluidHealth" component={FuildHealth} />
        <Stack.Screen name="Report" component={Report} />

    </Stack.Navigator>
);