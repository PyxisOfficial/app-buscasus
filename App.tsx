import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components'
import { Routes } from './src/routes/index';

import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_300Light, Poppins_500Medium, Poppins_600SemiBold,Poppins_700Bold } from '@expo-google-fonts/poppins';

//--------------------------------------------------

import Theme from './src/pages/global/styles/Theme';


//---------------------------------------------------




export default function App() {


  const [FontsLoaded] = useFonts({

      Poppins_300Light,
      Poppins_500Medium,
      Poppins_600SemiBold,
      Poppins_700Bold

  })
  
  if (!FontsLoaded){
    return <AppLoading />
  }
  
  return (
  
    <ThemeProvider theme={Theme} >
       
         <Routes/>
        
       </ThemeProvider>
 
  );
}