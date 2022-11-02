import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    Container,

    FavList,
    Hospitals,
    Header,
    Title,
    Return,
    IconReturn,
    HospitalView,
    HospitalIcon,
    HospitalName,
    HospitalAddress,
} from './styles';
export function Favoritos() {


    const navigation = useNavigation();

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getHospital = async () => {
        try {
            const response = await fetch('http://192.168.15.45/buscaSusWeb2-main/buscaSusWeb2-main//assets/json/json-hospital.php');

            const json = await response.json();
            setData(json.hospitais);
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



            <Header>
                <Return

                    onPress={() => navigation.goBack()}>
                    <IconReturn name='arrowleft' />
                </Return>

                <Title>Hospitais favoritos</Title>
            </Header>

            {isLoading ? <ActivityIndicator /> : (
                <FavList
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
                                    telefone: item.numTelefone

                                })}
                        >

                            <HospitalIcon name="hospital" />
                            <Hospitals>

                                <HospitalName>{item.nomeHospital}</HospitalName>

                                <HospitalAddress>{item.logradouroHospital}</HospitalAddress>

                            </Hospitals>
                        </HospitalView>
                    )}
                />
            )}



        </Container>
    );
}