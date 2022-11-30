import React from 'react';
import { Map } from '../../components/Map';
import { TabBar } from '../../components/TabBar';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    HeaderSearch,
    Input,
    SearchIcon,
} from './styles';

const { height, width } = Dimensions.get('screen')
export function MapScreen() {

    const navigation = useNavigation();

    return (
        <>
            <Container>
                
                <HeaderSearch>
                    <SearchIcon name='search' />
                    <Input placeholder='Pesquisar Hospital' />
                </HeaderSearch>
                <Map height={height} width={width} />

            </Container>
            <TabBar />
        </>
    );
}