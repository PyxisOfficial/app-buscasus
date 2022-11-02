import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Map } from '../../components/Map';

import {
  Container,
  Tab,
  UserAccont,
  TabSearch,
  VoiceSearchButton,
  VoiceIcon,
  UserAccontButton,
  TabSearchButton,
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



