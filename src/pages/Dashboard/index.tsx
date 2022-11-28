import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TabBar } from '../../components/TabBar';
import axios from 'axios';
import {
  Container,
  Search,
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
  Logout,
  LogoutTitle,
  ShortCut,
  ShortCutHospital,
  NearbyHospitals,
  AllHospitals,
  ShortCutDoctor,
  Specialty,
  AllDoctors,
  ShortCutTitle,
  PatternText,


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
      setGrettings('Boa Tarde');
    }

    else {
      setGrettings('Boa Noite')
    }


  }, [])


  return (
    <>
      <Header>
      
     
        <Profile>

         
          <TextHeaderBox>

            <AutoMessage>{grettings}</AutoMessage>
            <UserName>Leandro</UserName>

          </TextHeaderBox>
        </Profile>
        
      
      <Logout onPress={() => navigation.navigate('Login')}>
        <LogoutTitle>Sair</LogoutTitle>
      </Logout>

      </Header>

      <Container>

        <HeaderContent>
          <Logo height={50} width={50} />
          <Title>BuscaSus</Title>
        </HeaderContent>

       
        <SearchContent>
          <Search onPress={() => navigation.navigate('SearchOptions')} >
           <SearchIcon name="search" />
          
            <SearchText>Pesquisar</SearchText>
          </Search>
        </SearchContent>



        <ShortCutTitle>Pesquisar por:</ShortCutTitle>

        <ShortCut>

          <ShortCutHospital>

            <NearbyHospitals onPress={() => navigation.navigate('NearbyHospitals')}>
              <PatternText>Hospitais Próximos</PatternText>
              
            </NearbyHospitals>

            <AllHospitals onPress={() => navigation.navigate('AllHospitals')} >
            <PatternText>Hospitais</PatternText>
            </AllHospitals>

          </ShortCutHospital>



          <ShortCutDoctor>

            <Specialty onPress={() => navigation.navigate('Specialtys')}>
            <PatternText>Especialidades</PatternText>
            </Specialty>

            <AllDoctors onPress={() => navigation.navigate('AllDoctors')}>
            <PatternText>Médicos</PatternText>
            </AllDoctors>

          </ShortCutDoctor>

        </ShortCut>

        
      </Container>

   
     <TabBar/>
     
    </>
  );
}



