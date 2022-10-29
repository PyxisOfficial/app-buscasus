import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
} from './style';


export function SearchOptions() {

  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getHospital = async () => {
    try {
      const response = await fetch('http://192.168.15.45/buscaSusWeb2-main/buscaSusWeb2-main//assets/json/json-hospital.php');

      const json = await response.json();
      setData(json.hospitais);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getHospital();
  }, []);

  return (
    <Container>
      <Search>
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
        {isLoading ? <ActivityIndicator /> : (
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
                    telefone: item.numTelefone
                    
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
        )}
      </RecommendBox>
    </Container>
  );
};

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HospitalPage } from '../HospitalPage';


const Stack = createNativeStackNavigator();

function NavigationTab() {

  return (


    <Stack.Navigator>

      <Stack.Screen name='HospitalPage' component={HospitalPage} />

    </Stack.Navigator>

  )
}
