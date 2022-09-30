import React from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { cpf } from 'cpf-cnpj-validator'; 

import {
  Container,
  ProjectName,
  InputImage,
  InputBox,
  LinkBox,
  TextBeforeLink,
  TextLink,
  Link,
  Onda
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
    handleSubmit,
     control,
     formState: {errors}
    
    } = useForm({
    resolver: yupResolver(schema)
  })
  const navigation = useNavigation();

  function handleRegister(form: FormData) {

 const Data = {
      name: form.name,
      CPF: cpf.format(form.CPF),
      Email: form.Email,
      Password: form.Password,
      ConfPassword: form.ConfPassword,
    }

    

    if(form.ConfPassword != form.Password ){
      return alert('Senha incorreta')
    }

    if(cpf.isValid(form.CPF)){
      return ( console.log(Data))
    }
    else{
      return (alert('informe um CPF válido') )
    }

 

   
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>

        <Logo />

        <ProjectName>BuscaSUS</ProjectName>
<KeyboardAvoidingView behavior="position" enabled>
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
          
          />
        </InputBox>

        <InputBox>
          <InputImage name="lock" />
          <InputForm
            name="ConfPassword"
            control={control}
            placeholder='Confirmar Senha'
            error={errors.ConfPassword && errors.ConfPassword.message}
          />
        </InputBox>
</KeyboardAvoidingView>
        <Button
          Title='CADASTRAR'
          onPress={handleSubmit(handleRegister)}
        />



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