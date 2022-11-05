import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Doctors } from '../modals/Doctors';
import { Duty } from '../modals/Duty';

import { Modal } from 'react-native';

import {
  Container,
  Actions,
  Title,
  Return,
  Header,
  IconReturn,
  Search,
  HospitalPicture,
  HospitalPhoto,
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

export function HospitalPage({ route }) {

  const [isActive, setIsActive] = useState(false);



  function handleFavActive(type: true | false) {
    setIsActive(type)

  }

  const [dutyOpen, setDutyOpen] = useState(false);

  function HandleOpenDutyPage() {
    setDutyOpen(true)
  }

  function HandleCloseDutyPage() {
    setDutyOpen(false)
  }


  const [doctorsOpen, setDoctorsOpen] = useState(false)

  function HandleOpenDoctorsPage() {
    setDoctorsOpen(true)
  }

  function HandleCloseDoctorsPage() {
    setDoctorsOpen(false)
  }


  const navigation = useNavigation();

  return (
    <Container>

      <Header>

        <Return

          onPress={() => navigation.goBack()}>
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

      <Search placeholder='Pesquise um plantão ou especialidade médica aqui' />

        <HospitalPicture></HospitalPicture>
        
  


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

          <DutyButton onPress={HandleOpenDutyPage}>
            <TitleButton>Ver Plantões</TitleButton>
          </DutyButton>

          <DoctorsButton onPress={HandleOpenDoctorsPage}>
            <TitleButton>Ver Médicos</TitleButton>
          </DoctorsButton>


        </Services>

        <Footer>
          <Button Title='Definir rota' onPress={() => navigation.navigate('Dashboard')} />
        </Footer>

      </Filds>

      <Modal visible={doctorsOpen}>
        <Doctors closeModal={HandleCloseDoctorsPage} />
      </Modal>

      <Modal visible={dutyOpen}>
        <Duty closeModal={HandleCloseDutyPage} />
      </Modal>
    </Container>
  );
}

