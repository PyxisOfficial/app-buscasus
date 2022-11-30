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
  Complaint,
  TitleButtonComplaint,
} from './styles';
import { Button } from '../../components/Button';


export function HospitalPage({ route }) {

  const [isActive, setIsActive] = useState(false);

  const {
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
    idHospital,
  } = route.params;

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
            idHospital: idHospital,
          })}>
            <TitleButton>Ver Plantões</TitleButton>
          </DutyButton>

          <DoctorsButton onPress={() => navigation.navigate('Doctors', {
            idHospital: idHospital,
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

          <Complaint onPress={() => navigation.navigate('ComplaintArea', {
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
            idHospital: idHospital,
          })}>
            <TitleButtonComplaint>Reclame Aqui</TitleButtonComplaint>
          </Complaint>

        </Services>

        <Footer>
          <Button Title='Definir rota' onPress={() => navigation.navigate('MapScreen')} />
        </Footer>

      </Filds>

    </Container>
  );
}

