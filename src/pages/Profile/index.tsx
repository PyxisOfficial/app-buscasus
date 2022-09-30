import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
    Container,
    Header,
    ProfileUserIcon,
    UserName,
    AutoMessage,
    Logout,
    LogoutButton,
    TextHeaderBox,
    UserIcon,
} from './style';

export function Profile() {

    const navigation = useNavigation();
    const [grettings, setGrettings] = useState('');

    useEffect(() => {

        const CurrentHour = new Date().getHours();

        if(CurrentHour >= 6 && CurrentHour < 12){
            setGrettings('Bom Dia');
        }
        else if(CurrentHour >= 12 && CurrentHour < 18){
            setGrettings('Bom Tarde');
        }
        
        else{
            setGrettings('Boa Noite')
        }


    },[])
  return (
    <Container>

        <Header>

            <ProfileUserIcon>
                <UserIcon source={require('../../assets/Leandro.jpeg')}/>
            </ProfileUserIcon>

            <TextHeaderBox>
            <AutoMessage>{grettings}</AutoMessage>
            <UserName>Leandro Coelho</UserName>
            </TextHeaderBox>

            <LogoutButton
             onPress={() => navigation.navigate('Dashboard')}
             >
                <Logout name="logout"/></LogoutButton>

        </Header>

    </Container>
  );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../Dashboard';


const Stack = createNativeStackNavigator();

function NavigationLogin() {

  return (


    <Stack.Navigator>
      <Stack.Screen name='Dashboard' component={Dashboard} />
  
    </Stack.Navigator>

  )
}