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


import { useNavigation } from '@react-navigation/native';
import { Logo } from '../Logo';


export function CustomDrawer({ ...props }) {


    const navigation = useNavigation();
    return (
        <Container>

            <Header>
                <Profile>
                    <Logo height={40} width={40}/>
                    <TextHeaderBox>
                        <UserName>BuscaSus</UserName>
                    </TextHeaderBox>
                </Profile>

            </Header>
            <DrawerItens>
                <Settings>
                    <IconDrawer name='gear' />
                    <Title>Configurações</Title>
                </Settings>

                <Help>
                    <IconDrawer name='question' />
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