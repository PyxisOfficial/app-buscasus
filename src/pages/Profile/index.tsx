import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TabBar } from '../../components/TabBar';
import { useAuth } from '../../hooks/auth';

import {
    Container,
    Header,
    ProfileUserIcon,
    UserName,
    AutoMessage,
    TextHeaderBox,
    UserIcon,

} from './styles';

export function Profile() {

    const { user } = useAuth();

    const [grettings, setGrettings] = useState('');

    useEffect(() => {

        const CurrentHour = new Date().getHours();

        if (CurrentHour >= 6 && CurrentHour < 12) {
            setGrettings('Bom Dia');
        }
        else if (CurrentHour >= 12 && CurrentHour < 18) {
            setGrettings('Bom Tarde');
        }

        else {
            setGrettings('Boa Noite')
        }


    }, [])
    return (
        <>
            <Container>

                <Header>

                    <ProfileUserIcon>
                        <UserIcon source={{uri: user.photo}} />
                    </ProfileUserIcon>

                    <TextHeaderBox>
                        <AutoMessage>{grettings}</AutoMessage>
                        <UserName>{user.name}</UserName>
                    </TextHeaderBox>

                </Header>


            </Container>

            <TabBar />
        </>
    );
}