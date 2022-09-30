import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Dashboard } from './pages/Dashboard';
import { SearchOptions } from './pages/SearchOptions';
import { Profile } from './pages/Profile';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName='Dashboard'>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown:false}}/>
        <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}}/>
        <Stack.Screen name='SearchOptions' component={SearchOptions} options={{headerShown:false}}/>
        <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
    </Stack.Navigator>

  );
}
