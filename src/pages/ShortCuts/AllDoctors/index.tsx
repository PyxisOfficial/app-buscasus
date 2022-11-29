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
  DoctorSearch,
  Doctor,
  DoctorView,
  DoctorIcon,
  DoctorName,
  DoctorSpecialty,
} from './styles';


export function AllDoctors() {


  const navigation = useNavigation();
  
  const [search, setSearch] = useState('')
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://192.168.56.1:8080/buscaSus/api/area-hospital/medico/')
      .then((response) => { setData(response.data); })
  }, []);

  useEffect(() => {

    axios.get('http://192.168.56.1:8080/buscaSus/api/area-hospital/medico/',{
    
    params: {
      generalSearch: search,
    
      }
}

    )
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
            onChangeText={setSearch} />
          </SearchContent>

          <DoctorSearch
            data={data}
            keyExtractor={({ idMedico }, index) => idMedico}
            renderItem={({ item }) => (
              
              <DoctorView
                onPress={() => navigation.navigate('DoctorPage')}
              >

             
                <Doctor>
                    
                  <DoctorName>{item.nomeMedico}</DoctorName>



                </Doctor>
              </DoctorView>
            )}
          />


        </Container>

      </TouchableWithoutFeedback>

      <TabBar />

    </>

  );
}