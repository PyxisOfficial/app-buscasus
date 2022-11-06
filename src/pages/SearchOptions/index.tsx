import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
import axios from 'axios';

import {
  Container,
  Search,
  SearchIcon,
  HospitalSearchRecommended,
  RecommendedHospital,
  HeaderRecommend,
  RecommendBox,
  RecommendedHospitalView,
  HospitalIcon,
  HospitalName,
  HospitalAddress,
  Input,
  Filter,
  FilterIcon,
  Tab,
  UserAccont,
  TabSearch,
  VoiceSearchButton,
  VoiceIcon,
  UserAccontButton,
  TabSearchButton,
  Return,
  IconReturn,
} from './style';


export function SearchOptions() {

  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(() => {
  axios.get(`http://192.168.15.45/buscaSusWeb-main/buscaSusWeb-main/api/area-admin/hospital//`).then((response)=> { setData(response.data);})
  }, []);

  return (
    <>
      <Container>
        <Search>
          <Return

            onPress={() => navigation.goBack()}>
            <IconReturn name='arrowleft' />
          </Return>
          <SearchIcon name="search" />
          <Input
            placeholder='Pesquise um hospital ou especialidade'
          />

          <Filter>
            <FilterIcon name='ios-filter' />
          </Filter>
        </Search>
        <RecommendBox>
          <HeaderRecommend>Hospitais recomendados</HeaderRecommend>
          
            <HospitalSearchRecommended
              data={data}
              keyExtractor={({ idHospital }, index) => idHospital}
              renderItem={({ item }) => (

                <RecommendedHospitalView
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
                      urlHospital:'http://192.168.15.45/buscaSusWeb-main/buscaSusWeb-main/api/area-admin/img/',
                      foto: item.fotoHospital,
                      DutyUrl: 'http://192.168.15.45/buscaSusWeb-main/buscaSusWeb-main/api/area-hospital/plantao/?idHospital=',
                      idDuty: item.idHospital,
                      doctorJson: 'http://192.168.15.45/buscaSusWeb-main/buscaSusWeb-main/api/area-hospital/medico/?idHospital=',
                      idDoctor: item.idHospital,
                    })}
                >

                  <HospitalIcon name="hospital" />
                  <RecommendedHospital>

                    <HospitalName>{item.nomeHospital}</HospitalName>

                    <HospitalAddress>{item.logradouroHospital}</HospitalAddress>

                  </RecommendedHospital>
                </RecommendedHospitalView>
              )}
            />
          
        </RecommendBox>
      </Container>

      <Tab>
        <UserAccontButton>
          <UserAccont
            name='gear'

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
};

