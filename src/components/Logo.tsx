import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';



export function Logo() {
  return (
    <View style={styles.container}>
        <Image style={styles.Logo} source={require('../assets/Logo.png')}/>
    </View>
  );
}
 
const styles = StyleSheet.create({

container:{
   

},

Logo:{

   height: 150,
   width: 150,

   }



});
