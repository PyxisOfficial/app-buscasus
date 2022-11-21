import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { DrawerRoutes } from "./drower.routes";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from '../hooks/auth';

export function Routes(){

    const {signed}=  useAuth();

    return(

        <NavigationContainer>
            {signed ? <AppRoutes/> && <DrawerRoutes/> : <AuthRoutes/>}
        </NavigationContainer>


    )



}