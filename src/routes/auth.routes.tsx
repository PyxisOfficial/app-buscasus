import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Login } from '../pages/Login';
import { Cadastro } from '../pages/Cadastro';



const Stack = createNativeStackNavigator();

export function AuthRoutes() {


  return (
    <Stack.Navigator initialRouteName='Login'>
      
      <Stack.Screen 

      name='Login' 
      component={Login} 
      options={{ headerShown: false }}

       />

      <Stack.Screen 
      
      name='Cadastro' 
      component={Cadastro} 
      options={{ headerShown: false }} 
      
      />
     
    </Stack.Navigator>

  );
}
