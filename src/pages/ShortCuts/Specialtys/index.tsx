import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TabBar } from '../../../components/TabBar'
import axios from 'axios';
import { TouchableWithoutFeedback, Keyboard, Alert, KeyboardAvoidingView } from 'react-native';

import {
  Container,
  Search,
  SearchIcon,
  SearchContent,
  SpecialtySearch,
  Specialty,
  SpecialtyView,
  SpecialtyIcon,
  SpecialtyName,
  GoTo,
} from './styles';


export function Specialtys() {


  const navigation = useNavigation();

  const [search, setSearch] = useState('')
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.56.1:8080/buscaSus/api/area-admin/especialidade/')
      .then((response) => { setData(response.data); })
  }, []);


  useEffect(() => {
    axios.get('http://192.168.56.1:8080/buscaSus/api/area-admin/especialidade/', {
      params: {
        search: search,
        }
    })
      .then((response) => { setData(response.data); })
  }, [search]);


  return (

    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <Container>

          <SearchContent>
            <SearchIcon name="search" />

            <Search 
            placeholder='Pesquisar Médico'
            onChangeText={setSearch}
             />
          </SearchContent>

          <SpecialtySearch
            data={data}
            keyExtractor={({ idEspecialidade }, index) => idEspecialidade}
            renderItem={({ item }) => (

              <SpecialtyView
                onPress={() => navigation.navigate('SpecialtyHospitals')}
              >


                <Specialty>
                  <SpecialtyIcon name="doctor"/>
                  <SpecialtyName>{item.nomeEspecialidade}</SpecialtyName>
                  <GoTo name='arrow-forward-ios'/>


                </Specialty>
              </SpecialtyView>
            )}
          />


        </Container>

      </TouchableWithoutFeedback>

      <TabBar />

    </>

  );
}