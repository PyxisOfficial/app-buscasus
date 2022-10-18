import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  ButtonStyle,
  TextButton,
} from './style'

interface ButtonProps extends TouchableOpacityProps{
Title:string
}

export function Button({Title, ...rest} : ButtonProps) {
  return (
    <Container>
   <ButtonStyle
   activeOpacity={0.5}
    {...rest}
   >
    <TextButton>{Title}</TextButton>

   </ButtonStyle>
   </Container>
  );
}

