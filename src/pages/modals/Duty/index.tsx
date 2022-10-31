import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

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


interface props  {
    closeModal: () => void
}

export function Duty({closeModal}: props) {

    const navigation = useNavigation();

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getPlantao = async () => {
        try {
            const response = await fetch('http://192.168.15.45/buscaSusWeb2-main/buscaSusWeb2-main//assets/json/json-plantao.php');
            const json = await response.json();
            setData(json.plantoes);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPlantao();
    }, []);

    return (
        <Container>
            <Filds>
            <Header>
                <Title>Plantões Disponiveis</Title>
            </Header>

            {isLoading ? <ActivityIndicator /> : (
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
            )}
        </Filds>

            <Footer>
                <Button Title='Voltar' onPress={closeModal} />
            </Footer>
        </Container>


    );
}