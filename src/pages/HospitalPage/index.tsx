import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
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
 Duty,
  Doctors,

} from './styles';
import { Button } from '../../components/Button';

export function HospitalPage({ route }) {

  const navigation = useNavigation();

  return (
    <Container>

      <Return onPress={() => navigation.goBack()}>
        <IconReturn name='arrowleft' />
      </Return>

      <Header>
        <Title>{route.params?.name}</Title>
      </Header>

      <Search placeholder='Pesquise um plantão ou especialidade médica aqui' />

      <HospitalPhoto horizontal={true} showsHorizontalScrollIndicator={false} >
        <HospitalPicture></HospitalPicture>
        <HospitalPicture></HospitalPicture>
        <HospitalPicture></HospitalPicture>
      </HospitalPhoto>

    
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

        <Duty/>
        <Doctors/>

      </Services>

      <Footer>
        <Button Title='Definir rota' />
      </Footer>
      
      </Filds>
    </Container>
  );
}