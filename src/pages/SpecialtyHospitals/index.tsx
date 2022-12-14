import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TabBar } from '../../components/TabBar'
import axios from 'axios';
import { TouchableWithoutFeedback, Keyboard, Alert, KeyboardAvoidingView } from 'react-native';
import {
  Container,
  Search,
  SearchIcon,
  SearchContent,
  HospitalSearch,
  Hospital,
  HospitalView,
  HospitalIcon,
  HospitalName,
  HospitalAddress,
  Return,
  IconReturn,
} from './styles';

export function SpecialtyHospitals() {

  const navigation = useNavigation();

  const [search, setSearch] = useState('')
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://192.168.15.45/buscaSus/api/area-admin/hospital//`)
      .then((response) => { setData(response.data); })
  }, []);

  useEffect(() => {
    axios.get(`http://192.168.15.45/buscaSus/api/area-admin/hospital//`, {
      params: {
        search: search
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
            <Return

              onPress={() => navigation.navigate('Specialtys')}>
              <IconReturn name='arrowleft' />
            </Return>
            <Search
              placeholder='Pesquisar hospital'
              onChangeText={setSearch}
            />
          </SearchContent>


          <HospitalSearch
            data={data}
            keyExtractor={({ idHospital }, index) => idHospital}
            renderItem={({ item }) => (

              <HospitalView
                onPress={() => navigation.navigate('HospitalPage',
                  {

                    name: item.nomeHospital,
                    endereço: item.logradouroHospital,
                    cep: item.cepHospital,
                    city: item.cidadeHospital,
                    bairro: item.bairroHospital,
                    uf: item.ufHospital,
                    abertura: item.aberturaHospital,
                    fechamento: item.fechamentoHospital,
                    telefone: item.numTelefone,
                    urlHospital: 'http://192.168.15.45/buscaSus/api/area-admin/img/',
                    foto: item.fotoHospital,
                    DutyUrl: 'http://192.168.15.45/buscaSus/api/area-hospital/plantao/?idHospital=',
                    idDuty: item.idHospital,
                    doctorJson: 'http://192.168.15.45/buscaSus/api/area-hospital/medico/?idHospital=',
                    idDoctor: item.idHospital,
                  })}
              >

                <HospitalIcon source={{ uri: 'http://192.168.15.45/buscaSus/api/area-admin/img/' + item.fotoHospital }} />
                <Hospital>

                  <HospitalName>{item.nomeHospital}</HospitalName>

                  <HospitalAddress>{item.logradouroHospital}</HospitalAddress>

                </Hospital>
              </HospitalView>
            )}
          />
        </Container>
      </TouchableWithoutFeedback>
      <TabBar />

    </>
  );
}