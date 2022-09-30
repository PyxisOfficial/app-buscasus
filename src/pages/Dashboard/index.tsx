import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SearchOptions } from '../SearchOptions';
import { Login } from '../Login';
import MapView from 'react-native-maps';
import { Platform, PermissionsAndroid, Dimensions, Modal } from 'react-native';
import Geocoder from 'react-native-geocoding';
import * as Location from 'expo-location';


import {
  Container,
  Search,
  Map,
  Tab,
  UserAccont,
  Settings,
  SearchIcon,
  VoiceSearchButton,
  VoiceIcon,
  UserAccontButton,
  SettingsButton,
  SearchText,
} from './style';



const { width, height } = Dimensions.get('screen');
export function Dashboard() {

  const [region, setRegion] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await region.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access region was denied');
        return;
      }

      const region = await region.getCurrentPositionAsync({});
      setRegion(region);
    })();
  }, []);

  const navigation = useNavigation();

  return (
    <>

      <Container>



        <SearchIcon name="search" />
        <Search

          onPress={() => navigation.navigate('SearchOptions')}

        >
          <SearchText>Pesquise um hospital ou especialidade</SearchText>
        </Search>


        <MapView

          onMapReady={() => {
            Platform.OS === 'android' ?
              PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
              )
              : ''
          }}
          style={{ width: width, height: height }}
          region={region}
          zoomEnabled={true}
          minZoomLevel={15}
          showsUserLocation={true}
          loadingEnabled={true}
        />
        <Tab>
          <UserAccontButton>
            <UserAccont
              name='person-outline'
              onPress={() => navigation.navigate('Login')}
            />
          </UserAccontButton>

          <VoiceSearchButton>
            <VoiceIcon name="mic" />
          </VoiceSearchButton>

          <SettingsButton>
            <Settings name='settings-outline' />
          </SettingsButton>
        </Tab>

      </Container>

    </>
  );
}


import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function NavigationLogin() {

  return (


    <Stack.Navigator>
      <Stack.Screen name='SearchOptions' component={SearchOptions} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>

  )
}

