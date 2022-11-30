import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { Alert } from 'react-native';

import {
  Container,
  ProjectName,
  InputImage,
  InputBox,
  Onda,
  LogoBox,
  HideButton,
  HideIcon,
  LoginOptions,
  SingUp,
  Title,
  InputContent,
  TitleButton, 

} from './style';

import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';




interface FormData {
  [name: string]: any;

}

const schema = Yup.object().shape({

  Login: Yup
    .string()
    .required('Informe o seu Email ou CPF'),

  Password: Yup
    .string()
    .required('Informe o sua senha'),
})

export function Login() {

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset

  } = useForm({
    resolver: yupResolver(schema)
  })

  function handleRegister(form: FormData) {

    reset()
    const Data = {
      Login: form.Login,
      Password: form.Password,
    }

    if (form.Login == 'LeandroCoelho@gmail.com' && form.Password == 12345678) {
      return (
        navigation.navigate("Dashboard"),
        setHidePassword(true)
        )


    }

    else if (form.Login != 'LeandroCoelho@gmail.com'  && form.Password == 12345678) {
      return Alert.alert('Erro ao realizar o Login' , 'Email errado ou CPF Inválido');
    }


    else {
      return Alert.alert('Erro ao realizar o Login', 'Senha Errada');
    }

  }


  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <Container>
        <KeyboardAvoidingView behavior="position" enabled>

          <LogoBox>

            <Logo height={120} width={120} />
            <ProjectName>BuscaSUS</ProjectName>

          </LogoBox>

          <InputContent>
          <InputBox>
            <InputImage name="person" />
            <InputForm
              name="Login"
              control={control}
              placeholder='Email ou CPF'
              autoCapitalize='sentences'
              autoCorrect={false}
              keyboardType='email-address'
              error={errors.Login && errors.Login.message}
            />
          </InputBox>


          <InputBox>

            <InputImage name="lock" />
            <InputForm
              name="Password"
              control={control}
              placeholder='Senha'
              autoCapitalize='sentences'
              autoCorrect={false}
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
          </InputContent>
          <Button
            Title='Login'

            onPress={handleSubmit(handleRegister)}
          />

        </KeyboardAvoidingView>

        <LoginOptions>
               
             <Title>Não tem uma conta?</Title>

          <SingUp onPress={() => navigation.navigate('Cadastro')}>
                    <TitleButton>Cadastre-se</TitleButton>
          </SingUp>

        </LoginOptions>

        <Onda source={require('../../assets/onda.png')} />

      </Container>
    </TouchableWithoutFeedback >
  );
}
