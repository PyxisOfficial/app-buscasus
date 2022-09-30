import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { Container, ProjectName, Input, InputImage, InputBox, LinkBox, TextBeforeLink, TextLink, Link, Contents , Onda } from './style';

import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { Cadastro } from '../Cadastro';
import {Dashboard} from '../Dashboard'

export function Login() {

  const navigation = useNavigation();

  return (
    <Container>

      <Logo />

      <ProjectName>BuscaSUS</ProjectName>

  
        <InputBox>
          <InputImage name="person" />
          <Input
            placeholder='Email ou CPF'
          />
        </InputBox>

        <InputBox>
          <InputImage name="lock" />
          <Input
            placeholder='Senha'
          />
        </InputBox>

        <Button
          Title='LOGIN'
          
          onPress={() => navigation.navigate('Profile')}
          >
            

        </Button>

        <LinkBox>
          <TextBeforeLink>Não possui uma conta no nosso App? Faça o</TextBeforeLink>
          <Link

            onPress={() => navigation.navigate('Cadastro')}
          >
            <TextLink> Cadastro!</TextLink>
          </Link>
        </LinkBox>
     


      <Onda source={require('../../assets/onda.png')} />
    </Container>

  );
}
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Profile } from '../Profile';

const Stack = createNativeStackNavigator();

function NavigationLogin() {

  return (


    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Cadastro' component={Cadastro} />
      <Stack.Screen name='Dashboard' component={Dashboard} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>

  )
}