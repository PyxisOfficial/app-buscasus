import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    Title,
    DoctorsList,
    DoctorInfo,
    Info,
    Name,
    Specialty,
    DutyInfo,
    Start,
    End,
    Filds,
    Footer,
} from './styles';

import { Button } from '../../../components/Button';



export function Duty({route}) {


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
        idHospital
    }  =  route.params;

        
    const navigation = useNavigation();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.56.1:8080/buscaSus/api/area-hospital/plantao/', 
        {
            params: {
            todayDuty: true,
            idHospital: idHospital
            }
        }
        ).then((response)=> { setData(response.data);})
        }, []);

    return (
        <Container>
            <Filds>
            <Header>
                <Title>Plantões Disponiveis</Title>
            </Header>

          
                <DoctorsList
                    data={data}
                    keyExtractor={({ idPlantao }, index) => idPlantao}
                    renderItem={({ item }) => (

                        <DoctorInfo>

                            <Info>

                                <Name>{item.nomeMedico}</Name>
                                <Specialty>{item.tipoPlantao}</Specialty>

                            </Info>

                            <DutyInfo>

                                <Info>

                                    <Start>Início: {item.inicioPlantao}</Start>
                                    <End>Término: {item.fimPlantao}</End>

                                </Info>

                            </DutyInfo>
                        </DoctorInfo>


                    )}
                />
          
        </Filds>

            <Footer>
                <Button Title='Voltar'onPress={() => navigation.navigate('HospitalPage', {
          DutyUrl: '',
          idDuty: '',
          name: name,
          endereço: endereço,
          cep: cep,
          city: city,
          bairro: bairro,
          uf: uf,
          abertura: abertura,
          fechamento: fechamento,
          telefone: telefone,
          foto : foto,
          urlHospital : urlHospital,
        })} />
            </Footer>
        </Container>


    );
}