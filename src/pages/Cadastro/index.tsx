import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { cpf } from 'cpf-cnpj-validator';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  ProjectName,
  InputImage,
  InputBox,
  LinkBox,
  TextBeforeLink,
  TextLink,
  Link,
  Onda,
  LogoBox,
  HideButton,
  HideIcon
} from './style';

import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { Login } from '../Login';
import { InputForm } from '../../components/InputForm';

import { useForm } from 'react-hook-form';



interface FormData {
  [name: string]: any;

}

const schema = Yup.object().shape({

  name: Yup
    .string()
    .required('Informe o seu nome'),

  CPF: Yup
    .string()
    .typeError('informe um valor numérico')
    .required('Informe o seu CPF'),

  Email: Yup
    .string()
    .required('Informe o seu Email'),

  Password: Yup
    .string()
    .required('Informe o sua senha'),

  ConfPassword: Yup
    .string()
    .required('Confirme sua senha'),

})
export function Cadastro() {
  const {
    formState: { errors },
    handleSubmit,
    control,

  } = useForm({
    resolver: yupResolver(schema)
  })

  const UserData = "@BuscaSus:Cadastro";

  useEffect(() => {

    async function loadData() {
      const data = await AsyncStorage.getItem(UserData);
      console.log(JSON.parse(data!))
    }

    loadData();

    /* async function remove() {
     await AsyncStorage.removeItem(UserData)
   }

   remove();*/
  }, [])


  const navigation = useNavigation();

  async function handleRegister(form: FormData) {

    const SingUpForm = {
      name: form.name,
      CPF: cpf.format(form.CPF),
      Email: form.Email,
      Password: form.Password,
      ConfPassword: form.ConfPassword,
    }

    try {

      const data = await AsyncStorage.getItem(UserData);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [

        ...currentData,
        SingUpForm

      ];




      await AsyncStorage.setItem(UserData, JSON.stringify(dataFormatted));
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível cadastrar')
    }

    if (form.ConfPassword != form.Password) {
      return alert('Senhas diferentes, tente novamente.')
    }

    if (cpf.isValid(form.CPF)) {
      return (console.log(SingUpForm))
    }
    else {
      return (alert('informe um CPF válido'))
    }

  }

  const [hidePassword, setHidePassword] = useState(true)
  const [hideConfPassword, setHideConfPassword] = useState(true)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <KeyboardAvoidingView behavior="position" enabled>

          <LogoBox>
            <Logo />
            <ProjectName>BuscaSUS</ProjectName>
          </LogoBox>
          <InputBox>
            <InputImage name="person" />
            <InputForm
              name="name"
              control={control}
              placeholder='Nome completo'
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
          </InputBox>

          <InputBox>
            <InputImage name="person" />
            <InputForm
              name="CPF"
              control={control}
              placeholder='CPF'
              keyboardType='numeric'
              error={errors.CPF && errors.CPF.message}
              maxLength={11}
            />
          </InputBox>
          <InputBox>
            <InputImage name="email" />
            <InputForm
              name="Email"
              control={control}
              placeholder='Email'
              error={errors.Email && errors.Email.message}
              keyboardType='email-address'
            />
          </InputBox>

          <InputBox>
            <InputImage name="lock" />
            <InputForm
              name="Password"
              control={control}
              placeholder='Senha'
              error={errors.Password && errors.Password.message}
              secureTextEntry={hidePassword}
            />
            <HideButton onPress={() => setHidePassword(!hidePassword)}>
              {
                hidePassword ? <HideIcon name='eye' />
                  :
                  <HideIcon name='eye-off' />
              }

            </HideButton>
          </InputBox>

          <InputBox>
            <InputImage name="lock" />
            <InputForm
              name="ConfPassword"
              control={control}
              placeholder='Confirmar Senha'
              error={errors.ConfPassword && errors.ConfPassword.message}
              secureTextEntry={hideConfPassword}
            />
            <HideButton onPress={() => setHideConfPassword(!hideConfPassword)}>
              {
                hideConfPassword ? <HideIcon name='eye' />
                  :
                  <HideIcon name='eye-off' />
              }

            </HideButton>
          </InputBox>

          <Button
            Title='CADASTRAR'
            onPress={handleSubmit(handleRegister)}
          />
        </KeyboardAvoidingView>


        <LinkBox>
          <TextBeforeLink>Já possui uma conta no nosso App? Faça</TextBeforeLink>
          <Link

            onPress={() => navigation.navigate('Login')}

          >
            <TextLink> login!</TextLink>
          </Link>
        </LinkBox>

        <Onda source={require('../../assets/onda.png')} />


      </Container>
    </TouchableWithoutFeedback>
  );
}



import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function NavigationCadastro() {

  return (


    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Cadastro' component={Cadastro} />
    </Stack.Navigator>

  )
}