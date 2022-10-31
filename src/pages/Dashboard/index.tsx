import React, { useState, useEffect } from 'react';

import { Map } from '../../components/Map';
import {
  Container,
  Search,
  Tab,
  UserAccont,
  TabSearch,
  SearchIcon,
  VoiceSearchButton,
  VoiceIcon,
  UserAccontButton,
  TabSearchButton,
  SearchText,
  Header,
  ProfileUserIcon,
  UserName,
  AutoMessage,
 
  TextHeaderBox,
  UserIcon,
} from './style';



export function Dashboard() {


  const navigation = useNavigation();

  const [grettings, setGrettings] = useState('');

  useEffect(() => {

    const CurrentHour = new Date().getHours();

    if (CurrentHour >= 6 && CurrentHour < 12) {
      setGrettings('Bom Dia');
    }
    else if (CurrentHour >= 12 && CurrentHour < 18) {
      setGrettings('Bom Tarde');
    }

    else {
      setGrettings('Boa Noite')
    }


  }, [])


  return (
    <>
      <Header>

        <ProfileUserIcon
        onPress={() => navigation.navigate('Profile')}
        >
          <UserIcon source={require('../../assets/Leandro.jpeg')} />
        </ProfileUserIcon>

        <TextHeaderBox>
          <AutoMessage>{grettings}</AutoMessage>
          <UserName>Leandro Coelho</UserName>
        </TextHeaderBox>

            </Header>
      <Container>

        <Map />

        </Container>
      <Tab>
        <UserAccontButton>
          <UserAccont
            name='person'
            onPress={() => navigation.navigate('Login')}
          />
        </UserAccontButton>

        <VoiceSearchButton>
          <VoiceIcon name="mic" />
        </VoiceSearchButton>

        <TabSearchButton
          onPress={() => navigation.navigate('SearchOptions')}>
          <TabSearch name='ios-search' />
        </TabSearchButton>
      </Tab>
    </>
  );
}


import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SearchOptions } from '../SearchOptions';
import { Login } from '../Login';
import { Profile } from '../Profile';

const Stack = createNativeStackNavigator();

function NavigationTab() {

  return (


    <Stack.Navigator>
      <Stack.Screen name='SearchOptions' component={SearchOptions} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>

  )
}

