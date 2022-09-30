import React from 'react';
import { View, Image, StyleSheet } from 'react-native';




export function Logo() {
  return (
    <View style={styles.container}>
        <Image style={styles.Logo} source={require('../assets/Logo.png')}/>
    </View>
  );
}
 
const styles = StyleSheet.create({

container:{
   
    padding: 20,
},

Logo:{

   height: 240,
   width: 240,
   alignSelf:'center',
   }



});
