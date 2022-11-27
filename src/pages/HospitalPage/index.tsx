import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Title,
  Return,
  Header,
  IconReturn,
  Search,
  HospitalPicture,
  HospitalInfo,
  HeaderInfo,
  Icon,
  Info,
  Primary,
  Secundary,
  Content,
  Footer,
  Filds,
  Services,
  DutyButton,
  DoctorsButton,
  TitleButton,
  Favorite,
  FavIcon,
} from './styles';
import { Button } from '../../components/Button';
import { useEvent } from 'react-native-reanimated';

export function HospitalPage({ route }) {

  const [isActive, setIsActive] = useState(false);

  const {
    doctorJson,
    idDoctor,
    name,
    endereço,
    cep,
    city,
    bairro,
    uf,
    abertura,
    fechamento,
    telefone,
    foto,
    urlHospital,
    DutyUrl,
    idDuty,
  } = route.params;

  const [urlDuty, setUrlDuty] = useState('');
  const [urlDoctor, setUrlDoctor] = useState('');


  useEffect(() => {

    const data = doctorJson + idDoctor
    setUrlDoctor(data)

  }, [])

  useEffect(() => {

    const dataDuty = DutyUrl + idDuty
    setUrlDuty(dataDuty)

  }, [])

  async function handleFavActive() {

    if (isActive == false) {
      setIsActive(true)

    }
    else if (isActive == true) {
      setIsActive(false)

    }

  }

  const navigation = useNavigation();




  return (
    <Container>

      <Header>

        <Return

          onPress={() => navigation.navigate('AllHospitals')}>
          <IconReturn name='arrowleft' />
        </Return>

        <Title
          maxLenght={30}>{route.params?.name}</Title>

        <Favorite
          isActive={isActive}
          onPress={() => handleFavActive(true)}>
          <FavIcon
            isActive={isActive}
            name='hearto' />
        </Favorite>




      </Header>

      
      <HospitalPicture source={{ uri: urlHospital + foto }} />


      <HospitalInfo>

        <HeaderInfo>
          <Icon name='map-pin' />

          <Info>Endereço</Info>
        </HeaderInfo>

        <Content>
          <Primary>{route.params?.endereço} - {route.params?.bairro} </Primary>
          <Secundary>{route.params?.city} - {route.params?.uf}, {route.params?.cep}</Secundary>
        </Content>

        <HeaderInfo>
          <Icon name='phone' />

          <Info>Contato</Info>
        </HeaderInfo>

        <Content>
          <Primary>{route.params?.telefone} </Primary>
        </Content>

        <HeaderInfo>
          <Icon name='clock' />

          <Info>Horário de funcionamento</Info>
        </HeaderInfo>

        <Content>
          <Primary>{route.params?.abertura} - {route.params?.fechamento} </Primary>
        </Content>

      </HospitalInfo>
      <Filds>

        <Services>

          <DutyButton onPress={() => navigation.navigate('Duty', {
            urlDuty: urlDuty,
            name: name,
            endereço: endereço,
            cep: cep,
            city: city,
            bairro: bairro,
            uf: uf,
            abertura: abertura,
            fechamento: fechamento,
            telefone: telefone,
            foto: foto,
            urlHospital: urlHospital,
            idHospital: idDuty
          })}>
            <TitleButton>Ver Plantões</TitleButton>
          </DutyButton>

          <DoctorsButton onPress={() => navigation.navigate('Doctors', {
            urlDoctor: urlDoctor,
            name: name,
            endereço: endereço,
            cep: cep,
            city: city,
            bairro: bairro,
            uf: uf,
            abertura: abertura,
            fechamento: fechamento,
            telefone: telefone,
            foto: foto,
            urlHospital: urlHospital
          })}>
            <TitleButton>Ver Médicos</TitleButton>
          </DoctorsButton>


        </Services>

        <Footer>
          <Button Title='Definir rota' onPress={() => navigation.navigate('Dashboard')} />
        </Footer>

      </Filds>

    </Container>
  );
}

