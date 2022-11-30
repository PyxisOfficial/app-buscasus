import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { DrawerRoutes } from "./drower.routes";
import { AppRoutes } from "./app.routes";




export function Routes(){

   return(

        <NavigationContainer>
            {<AppRoutes/> && <DrawerRoutes/> }
        </NavigationContainer>


    )



}