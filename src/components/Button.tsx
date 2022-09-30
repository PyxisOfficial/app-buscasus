import React from 'react';
import { StyleSheet, TouchableOpacityProps, Text, View } from 'react-native';
import { ButtonStyle, TextButtonStyle } from '../pages/Login/style';

interface ButtonProps extends TouchableOpacityProps{
Title:string
}

export function Button({Title, ...rest} : ButtonProps) {
  return (
    <View style={styles.container}>
   <ButtonStyle
   activeOpacity={0.5}
    {...rest}
   >
    <TextButtonStyle>{Title}</TextButtonStyle>

   </ButtonStyle>
   </View>
  );
}

const styles = StyleSheet.create({

  container:{
     
      padding: 20,
  },
 
  
  });
  