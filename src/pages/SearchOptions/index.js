import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';


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
} from './style';


export function SearchOptions() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getHospital = async () => {
    try {
      const response = await fetch('http://192.168.15.45/buscaSusWeb-main/buscaSusWeb-main//assets/json/json-hospital.php');

      const json = await response.json();
      setData(json.hospital);
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

      <SearchIcon name="search" />
      <Search
        placeholder='Pesquise um hospital ou especialidade'
      />

      <RecommendBox>
        <HeaderRecommend>Hospitais recomendados</HeaderRecommend>
        {isLoading ? <ActivityIndicator /> : (
          <HospitalSearchRecommended
            data={data}
            keyExtractor={({ idHospital }, index) => idHospital}
            renderItem={({ item }) => (
              <RecommendedHospitalView>

                <HospitalIcon name="hospital"/>
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