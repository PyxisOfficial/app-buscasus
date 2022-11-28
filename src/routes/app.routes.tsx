import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { Dashboard } from '../pages/Dashboard';
import { SearchOptions } from '../pages/SearchOptions';
import { HospitalPage } from '../pages/HospitalPage';
import { Doctors } from '../pages/modals/Doctors';
import { Duty } from '../pages/modals/Duty';
import { Recentes } from '../pages/profileScreens/Recentes';
import { Configuracoes } from '../pages/profileScreens/Settings';
import { Favoritos } from '../pages/profileScreens/Favoritos';
import { AllDoctors } from '../pages/ShortCuts/AllDoctors';
import { AllHospitals } from '../pages/ShortCuts/AllHospitals';
import { NearbyHospitals } from '../pages/ShortCuts/NearbyHospitals';
import { Specialtys } from '../pages/ShortCuts/Specialtys';
import { Cadastro } from '../pages/Cadastro';
import { Login } from '../pages/Login';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false }} />
      <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
      <Stack.Screen name='SearchOptions' component={SearchOptions} options={{ headerShown: false }} />
      <Stack.Screen name='HospitalPage' component={HospitalPage} options={{ headerShown: false }} />
      <Stack.Screen name='Doctors' component={Doctors} options={{ headerShown: false }} />
      <Stack.Screen name='Duty' component={Duty} options={{ headerShown: false }} />
      <Stack.Screen name='Recentes' component={Recentes} options={{ headerShown: false }} />
      <Stack.Screen name='Configuracoes' component={Configuracoes} options={{ headerShown: false }} />
      <Stack.Screen name='Favoritos' component={Favoritos} options={{ headerShown: false }} />
      <Stack.Screen name='AllDoctors' component={AllDoctors} options={{ headerShown: false }} />
      <Stack.Screen name='AllHospitals' component={AllHospitals} options={{ headerShown: false }} />
      <Stack.Screen name='NearbyHospitals' component={NearbyHospitals} options={{ headerShown: false }} />
      <Stack.Screen name='Specialtys' component={Specialtys} options={{ headerShown: false }} />
    </Stack.Navigator>

  );
}
