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
    

} from './style';

import { Logo } from '../../components/Logo';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';
import { useAuth } from '../../hooks/auth'



interface FormData {
  [name: string]: any;

}

const schema = Yup.object().shape({

  userName: Yup
    .string()
    .required('Informe o seu Email ou CPF'),

  Password: Yup
    .string()
    .required('Informe o sua senha'),
})

export function Login() {


  const {signIn} : any = useAuth();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const {
    formState: { errors },
    handleSubmit,
    control,
    reset

  } = useForm({
    resolver: yupResolver(schema)
  })

  function handleRegister(form: FormData) {

    setUserName(form.userName);
    setPassword(form.PasssetPassword)
  
    signIn(userName, password)
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

          <InputBox>
            <InputImage name="person" />
            <InputForm
              name="userName"
              control={control}
              placeholder='Email ou CPF'
              autoCapitalize='sentences'
              autoCorrect={false}
              keyboardType='email-address'
              error={errors.userName && errors.userName.message}
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

          <Button
            Title='Login'

            onPress={handleSubmit(handleRegister)}
          />

        </KeyboardAvoidingView>

        <LoginOptions>
       
          
           

          <Title>ou</Title>

          <SingUp onPress={() => navigation.navigate('Cadastro')}>
                    <Title>Cadastre-se</Title>
          </SingUp>

        </LoginOptions>

        <Onda source={require('../../assets/onda.png')} />

      </Container>
    </TouchableWithoutFeedback >
  );
}
