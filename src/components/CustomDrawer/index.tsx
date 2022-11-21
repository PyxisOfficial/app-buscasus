import React from 'react';
import {
    Container,
    Header,
    Profile,
    TextHeaderBox,
    UserName,
    UserIcon,
    Settings,
    Help,
    Title,
    IconDrawer, 
    DrawerItens, 
    OthersFunctionalities,
    Favorites,
    IconView,
    Icon,
    Activy,
    PatternText,
    IconButton,
} from './styles';


import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';


export function CustomDrawer({ ...props }) {

    
    const navigation = useNavigation();
    return (
        <Container>
           

            <DrawerItens>
                            <Settings>
                    <IconDrawer name='gear'/>
                    <Title>Configurações</Title>
                </Settings>

                <Help>
                    <IconDrawer name='question'/>
                    <Title>Ajuda</Title>
                </Help>

            </DrawerItens>

            
            <OthersFunctionalities>

                <Favorites onPress={() => navigation.navigate('Favoritos')}>

                    <IconView>
                        <Icon name='heart' />
                    </IconView>

                    <PatternText>Ver Favoritos</PatternText>

                </Favorites>

                <Activy onPress={() => navigation.navigate('Recentes')}>

                    <IconView>
                        <Icon name='clock' />
                    </IconView>

                    <PatternText>Atividade</PatternText>

                </Activy>

            </OthersFunctionalities>

        </Container>
    );
}