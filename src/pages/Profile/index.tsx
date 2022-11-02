import React from 'react';
import { useEffect, useState } from 'react';

import { ProfileContent } from '../../components/ProfileContent';

import {
  Container,
  Header,
  ProfileUserIcon,
  UserName,
  AutoMessage,
  Logout,
  LogoutButton,
  TextHeaderBox,
  UserIcon,
  UserAccontButton,
  SettingsButton,
  Tab,
  UserAccont,
  Settings,
  VoiceIcon,
  VoiceSearchButton,
} from './style';

export function Profile() {

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

      <Container>

        <Header>

          <ProfileUserIcon>
            <UserIcon source={require('../../assets/Leandro.jpeg')} />
          </ProfileUserIcon>

          <TextHeaderBox>
            <AutoMessage>{grettings}</AutoMessage>
            <UserName>Leandro Coelho</UserName>
          </TextHeaderBox>

          <LogoutButton
            onPress={() => navigation.navigate('Login')}
          >
            <Logout name="logout" /></LogoutButton>

        </Header>

        <ProfileContent

          icon='heart'
          title='Favoritos'
          onPress={() => navigation.navigate('Favoritos')}
        />

        <ProfileContent

          icon='clock'
          title='Recentes'
          onPress={() => navigation.navigate('Recentes')}
        />

        <ProfileContent

          icon='settings'
          title='Configurações'
          onPress={() => navigation.navigate('Configuracoes')}
        />


      </Container>
      <Tab>
        <UserAccontButton>
          <UserAccont
            name='person'
            onPress={() => navigation.navigate('Profile')}
          />
        </UserAccontButton>

        <VoiceSearchButton
          onPress={() => navigation.navigate('Dashboard')}
        >
          <VoiceIcon name="home" />
        </VoiceSearchButton>


        <SettingsButton>
          <Settings name='search'
            onPress={() => navigation.navigate('SearchOptions')}
          />
        </SettingsButton>
      </Tab>
    </>
  );
}

import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../Dashboard';
import { SearchOptions } from '../SearchOptions';
import { Login } from '../Login';
import { Recentes } from '../profileScreens/Recentes';
import { Configuracoes } from '../profileScreens/Settings';
import { Favoritos } from '../profileScreens/Favoritos';

const Stack = createNativeStackNavigator();

function NavigationTab() {

  return (


    <Stack.Navigator>
      <Stack.Screen name='SearchOptions' component={SearchOptions} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Dashboard' component={Dashboard} />
      <Stack.Screen name='Recentes' component={Recentes} />
      <Stack.Screen name='Configuracoes' component={Configuracoes} />
      <Stack.Screen name='Favoritos' component={Favoritos} />

    </Stack.Navigator>

  )
}