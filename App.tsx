import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components'
import { Routes } from './src/routes/index';

import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_300Light, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { AuthProvider } from './src/hooks/auth';

import { useAuth } from './src/hooks/auth';
//--------------------------------------------------

import Theme from './src/pages/global/styles/Theme';


//---------------------------------------------------




export default function App() {

  const {isLoading} = useAuth();
  const [FontsLoaded] = useFonts({

      Poppins_300Light,
      Poppins_500Medium,
      Poppins_700Bold

  })
  
  if (!FontsLoaded || isLoading){
    return <AppLoading />
  }
  
  return (
  
    <ThemeProvider theme={Theme} >

        <AuthProvider>
         <Routes/>
        </AuthProvider>
  
     </ThemeProvider>
 
  );
}