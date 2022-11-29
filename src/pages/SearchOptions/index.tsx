import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TabBar } from '../../components/TabBar';
import axios from 'axios';

import {
  Container,
  Search,
  SearchIcon,
  HospitalList,
  HeaderRecommend,
  RecommendBox,
  HospitalSearch,
  Hospital,
  HospitalView,
  HospitalIcon,
  HospitalName,
  HospitalAddress,
  Input,
  Filter,
  FilterIcon,
  Return,
  IconReturn,
} from './style';


export function SearchOptions() {

  const navigation = useNavigation();

  const [search, setSearch] = useState('')
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://192.168.56.1:8080/buscaSus/api/area-admin/hospital//`)
    .then((response) => { setData(response.data); })
  }, []);

  useEffect(() => {
    axios.get(`http://192.168.56.1:8080/buscaSus/api/area-admin/hospital//`,  {
      params:{
        search: search
      }
    }
        
    )
    .then((response) => { setData(response.data); })
  }, [search]);

  return (
    <>
      <Container>
        <Search>
          <Return

            onPress={() => navigation.navigate('Dashboard')}>
            <IconReturn name='arrowleft' />
          </Return>
          <SearchIcon name="search" />
          <Input
          onChangeText={setSearch} 
            placeholder='Pesquise um hospital ou especialidade'
          />

        
          <Filter>
            <FilterIcon name='ios-filter' />
          </Filter>
           </Search>

                <HospitalList>
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
                      urlHospital:'http://192.168.56.1:8080/buscaSus/api/area-admin/img/',
                      foto: item.fotoHospital,
                      idHospital: item.idHospital,          
             })}
                >

                  <HospitalIcon source={{uri:'http://192.168.56.1:8080/buscaSus/api/area-admin/img/' + item.fotoHospital }}/>
                  <Hospital>

                    <HospitalName>{item.nomeHospital}</HospitalName>

                    <HospitalAddress>{item.logradouroHospital}</HospitalAddress>

                  </Hospital>
                </HospitalView>
              )}
            />
            </HospitalList>
       



        <RecommendBox>
          <HeaderRecommend>Pesquisas recentes</HeaderRecommend>
          
            
            
          
        </RecommendBox>
        
      </Container>

      <TabBar/>
    </>
  );
};

