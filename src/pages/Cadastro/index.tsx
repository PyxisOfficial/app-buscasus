import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { cpf } from 'cpf-cnpj-validator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

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

interface FormProps {
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

 
  const navigation = useNavigation();

  async function handleRegister(form: FormProps) {

    const formData = new FormData();
    formData.append('nomeUsuario', form.name);
    formData.append('emailUsuario', form.Email);
    formData.append('senhaUsuario', form.Password);
    formData.append('cpfUsuario', cpf.format(form.CPF))

    if(form.ConfPassword == form.Password && cpf.isValid(form.CPF) &&  form.name != '' && form.email != '' && form.Password != ''){
    await axios.post('http://192.168.56.1:8080/buscaSus/api/area-usuario/usuario/', formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      Alert.alert(
        'Tudo certo!',
         "Cadastro realizado com sucesso",
         [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('Login')
          }
         ])

  }
}

  const [hidePassword, setHidePassword] = useState(true)
  const [hideConfPassword, setHideConfPassword] = useState(true)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <KeyboardAvoidingView behavior="position" enabled>

          <LogoBox>
            <Logo height={120} width={120} />
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

