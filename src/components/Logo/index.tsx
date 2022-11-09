import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


interface Props {
  height: number
  width: number
}

export function Logo({height, width}: Props) {
  return (
    <View>
        <Image style={{height: height, width: width}} source={require('../../assets/Logo.png')}/>
    </View>
  );
}
 
