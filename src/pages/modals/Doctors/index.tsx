import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    Title,
    DoctorsList,
    DoctorInfo,
    DoctorPhoto,
    DoctorIcon,
    Info,
    Name,
    Specialty,
} from './styles';



export function Doctors() {

    const navigation = useNavigation();

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMedico = async () => {
        try {
            const response = await fetch('http://192.168.15.45/buscaSusWeb2-main/buscaSusWeb2-main//assets/json/json-medico.php');

            const json = await response.json();
            setData(json.medicos);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMedico();
    }, []);

    return (
        <Container>
            <Header>
                <Title>Médicos</Title>
            </Header>

            {isLoading ? <ActivityIndicator /> : (
          <DoctorsList
            data={data}
            keyExtractor={({ idMedico }, index) => idMedico}
            renderItem={({ item }) => (

              <DoctorInfo>

                <DoctorPhoto>
                    <DoctorIcon name='person'/> 
                </DoctorPhoto>

                <Info>

                  <Name>{item.nomeMedico}</Name>
                 <Specialty>{item.nomeEspecialidade}</Specialty>

                </Info>
              </DoctorInfo>
            )}
          />
        )}
        </Container>

   
    );
}