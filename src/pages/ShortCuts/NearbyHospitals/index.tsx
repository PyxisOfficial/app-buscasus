import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TabBar } from '../../../components/TabBar'
import axios from 'axios';
import { Map } from '../../../components/Map';
import { Dimensions } from 'react-native';
import {
  Container,
  HospitalSearch,
  Hospital,
  HospitalView,
  HospitalIcon,
  HospitalName,
  HospitalAddress,
  GoToMap,
  MapView,
  Title,
  Header,
  Text,
} from './styles';



export function NearbyHospitals() {

  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://192.168.56.1:8080/buscaSus/api/area-admin/hospital//`)
      .then((response) => { setData(response.data); })
  }, []);


  return (
    <>
      <Container>
        <Header>
          <Title>Hospitais Próximos</Title>
        </Header>
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
                  urlHospital: 'http://192.168.56.1:8080/buscaSus/api/area-admin/img/',
                  foto: item.fotoHospital,
                  DutyUrl: 'http://192.168.56.1:8080/buscaSus/api/area-hospital/plantao/?idHospital=',
                  idDuty: item.idHospital,
                  doctorJson: 'http://192.168.56.1:8080/buscaSus/api/area-hospital/medico/?idHospital=',
                  idDoctor: item.idHospital,
                })}
            >

              <HospitalIcon source={{ uri: 'http://192.168.56.1:8080/buscaSus/api/area-admin/img/' + item.fotoHospital }} />
              <Hospital>

                <HospitalName>{item.nomeHospital}</HospitalName>

                <HospitalAddress>{item.logradouroHospital}</HospitalAddress>

              </Hospital>
            </HospitalView>
          )}
        />
        <Text>Ver Mapa</Text>
        <MapView>
          <GoToMap onPress={() => navigation.navigate('MapScreen')}>
            <Map height={150} width={300} />
          </GoToMap>
        </MapView>
      </Container>

      <TabBar />
    </>
  );
}