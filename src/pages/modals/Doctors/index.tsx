import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    Title,
    DoctorsList,
    DoctorInfo,
    DoctorPhoto,
    Info,
    Name,
    Specialty,
    Filds,
    Footer
} from './styles';
import { Button } from '../../../components/Button';
import { string } from 'yup';


interface props  {
  closeModal: () => void
}

interface FotoProps{
  fotoMedico: string
}

export function Doctors({route}, {closeModal}: props) {

  const {
    urlDoctor,
    name,
    endereço,
    cep,
    city,
    bairro,
    uf,
    abertura,
    fechamento,
    telefone,}  =  route.params;

    const navigation = useNavigation();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(urlDoctor).then((response)=> { setData(response.data);})
        }, []);

   const [imgDoctor, setImgDoctor] = useState('')
   useEffect(() => {

      const dataImg = 'http://192.168.15.45/buscaSusWeb-main/buscaSusWeb-main/api/area-hospital/img/'
      setImgDoctor(dataImg)
  
    }, [])
    return (
        <Container>
            <Filds>
            <Header>
                <Title>Médicos</Title>
            </Header>

          
          <DoctorsList
            data={data}
            keyExtractor={({ idMedico }, index) => idMedico}
            renderItem={({ item }) => (

              <DoctorInfo>

                <DoctorPhoto source={{uri: imgDoctor + item.fotoMedico}}/>

                <Info>

                  <Name>{item.nomeMedico}</Name>
                 <Specialty>{item.nomeEspecialidade}</Specialty>

                </Info>
              </DoctorInfo>
            )}
          />
       
        </Filds>

        <Footer>
        <Button Title='Voltar' onPress={() => navigation.navigate('HospitalPage', {
          doctorJson: '',
          idDoctor: '',
          name: name,
          endereço: endereço,
          cep: cep,
          city: city,
          bairro: bairro,
          uf: uf,
          abertura: abertura,
          fechamento: fechamento,
          telefone: telefone,
        })}/>
        </Footer>
        </Container>

   
    );
}