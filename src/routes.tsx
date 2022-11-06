import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Dashboard } from './pages/Dashboard';
import { SearchOptions } from './pages/SearchOptions';
import { HospitalPage } from './pages/HospitalPage';
import { Doctors } from './pages/modals/Doctors';
import { Duty } from './pages/modals/Duty';


const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName='Dashboard'>

      <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
      <Stack.Screen name='SearchOptions' component={SearchOptions} options={{ headerShown: false }} />
      <Stack.Screen name='HospitalPage' component={HospitalPage} options={{ headerShown: false }} />
      <Stack.Screen name='Doctors' component={Doctors} options={{ headerShown: false }} />
      <Stack.Screen name='Duty' component={Duty} options={{ headerShown: false }} />

    </Stack.Navigator>

  );
}
