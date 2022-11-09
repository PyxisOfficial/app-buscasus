import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Map } from '../../components/Map';

import {
  Container,
  Tab,
  Search,
  UserAccont,
  TabSearch,
  VoiceSearchButton,
  VoiceIcon,
  UserAccontButton,
  TabSearchButton,
  Header,
  HeaderContent,
  UserName,
  AutoMessage,
  TextHeaderBox,
  Title,
  SearchIcon,
  SearchContent,
  SearchText,
  Profile,
  UserIcon,
  Menu,
  MenuIcon,
  ShortCut,
  ShortCutHospital,
  NearbyHospitals,
  AllHospitals,
  ShortCutDoctor,
  Specialty,
  AllDoctors,
  ShortCutTitle,
  PatternText,
  OthersFunctionalities,
  Favorites,
  IconView,
  Icon,
  Activy,

} from './style';
import { Logo } from '../../components/Logo';



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
        <Profile>

          <UserIcon source={{ uri: 'https://avatars.githubusercontent.com/u/72211521?v=4' }} />
          <TextHeaderBox>

            <AutoMessage>{grettings}</AutoMessage>
            <UserName>Leandro</UserName>

          </TextHeaderBox>
        </Profile>

        <Menu>
          <MenuIcon name='ios-menu' />
        </Menu>
      </Header>

      <Container>

        <HeaderContent>
          <Logo height={50} width={50} />
          <Title>BuscaSus</Title>
        </HeaderContent>

        <SearchIcon name="search" />
        <SearchContent>
          <Search onPress={() => navigation.navigate('SearchOptions')} >
            <SearchText>Pesquisar</SearchText>
          </Search>
        </SearchContent>



        <ShortCutTitle>Pesquisar por:</ShortCutTitle>

        <ShortCut>

          <ShortCutHospital>

            <NearbyHospitals>
              <PatternText>Hospitais Próximos</PatternText>
              
            </NearbyHospitals>

            <AllHospitals>
            <PatternText>Hospitais</PatternText>
            </AllHospitals>

          </ShortCutHospital>



          <ShortCutDoctor>

            <Specialty>
            <PatternText>Especialidades</PatternText>
            </Specialty>

            <AllDoctors>
            <PatternText>Médicos</PatternText>
            </AllDoctors>

          </ShortCutDoctor>

        </ShortCut>

        <OthersFunctionalities>

          <Favorites>

            <IconView>
              <Icon name='heart'/>
            </IconView>

            <PatternText>Ver Favoritos</PatternText>

          </Favorites>

          <Activy>

          <IconView>
              <Icon name='clock'/>
            </IconView>

            <PatternText>Atividade</PatternText>

          </Activy>

        </OthersFunctionalities>

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
          onPress={() => navigation.navigate('Dashboard')}>
          <TabSearch name='home' />
        </TabSearchButton>
      </Tab>
    </>
  );
}



