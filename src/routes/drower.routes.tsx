import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

import { CustomDrawer } from '../components/CustomDrawer';

import { Dashboard } from '../pages/Dashboard';
import { SearchOptions } from '../pages/SearchOptions';
import { HospitalPage } from '../pages/HospitalPage/';
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
import { ComplaintArea } from '../pages/ComplaintArea';
import { MapScreen } from '../pages/MapScreen';
import { SpecialtyHospitals } from '../pages/SpecialtyHospitals';

export function DrawerRoutes() {
    return (

        <Drawer.Navigator
            drawerContent={CustomDrawer}
        >
            <Drawer.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Drawer.Screen name='Cadastro' component={Cadastro} options={{ headerShown: false }} />
            <Drawer.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false, drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='Recentes' component={Recentes} options={{ headerShown: false, drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='Configuracoes' component={Configuracoes} options={{ headerShown: false, drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='Favoritos' component={Favoritos} options={{ headerShown: false, drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='AllDoctors' component={AllDoctors} options={{ headerShown: false, drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='AllHospitals' component={AllHospitals} options={{ headerShown: false, drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='NearbyHospitals' component={NearbyHospitals} options={{ headerShown: false, drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='Specialtys' component={Specialtys} options={{ headerShown: false, drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='SearchOptions' component={SearchOptions} options={{ headerShown: false, drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='HospitalPage' component={HospitalPage} options={{ headerShown: false, drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='Doctors' component={Doctors} options={{ headerShown: false, drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='Duty' component={Duty} options={{ headerShown: false, drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='ComplaintArea' component={ComplaintArea} options={{ headerShown: false , drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='MapScreen' component={MapScreen} options={{ headerShown: false , drawerItemStyle: { height: 0 } }} />
            <Drawer.Screen name='SpecialtyHospitals' component={SpecialtyHospitals} options={{ headerShown: false , drawerItemStyle: { height: 0 } }} />
        </Drawer.Navigator>

    );
}

