import React, {useState}from 'react';
import { TouchableWithoutFeedback,Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

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
import { Cadastro } from '../Cadastro';
import { Dashboard } from '../Dashboard';
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

    if(form.Login == 'Adm' && form.Password == 123){
      return navigation.navigate("Profile")
       
    
   }

    else if(form.Login != 'Leandro@gmail.com' && form.Password == 123){
      return alert('Email errado ou CPF Inválido')
    }


    else{
      return alert('Senha Errada')
    }
    
  }


  const navigation = useNavigation();
const [hidePassword, setHidePassword] = useState(true)
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
          hidePassword ? <HideIcon name='eye'/> 
            :  
          <HideIcon name='eye-off'/> 
          }
         
        </HideButton>
      </InputBox>

      <Button
        Title='LOGIN'

        onPress={handleSubmit(handleRegister)}
      />
</KeyboardAvoidingView>

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
</TouchableWithoutFeedback>
  );
}
