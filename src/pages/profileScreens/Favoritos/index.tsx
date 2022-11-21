import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import { DrawerItem } from '@react-navigation/drawer';

export function Favoritos() {


    const navigation = useNavigation();

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    async function GetHospital() {

        const HpData = '@BuscaSus:Favoritos'

        const HospitalData: any = await AsyncStorage.getItem(HpData)
        setData(HospitalData)
    }

    useEffect(() => {
        GetHospital();
    }, [])

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
                    renderItem={({ item }) => (

                        <HospitalView
                            onPress={() => navigation.navigate('HospitalPage',
                                {

                                    name: item.name,
                                    endereço: item.endereço,
                                    cep: item.cep,
                                    city: item.city,
                                    bairro: item.bairro,
                                    uf: item.uf,
                                    abertura: item.abertura,
                                    fechamento: item.fechamento,
                                    telefone: item.telefone,

                                })}
                        >

                            <HospitalIcon name="hospital" />
                            <Hospitals>

                                <HospitalName>{item.name}</HospitalName>

                                <HospitalAddress>{item.endereço}</HospitalAddress>

                            </Hospitals>
                        </HospitalView>
                    )}
                />
            )}



        </Container>
    );
}