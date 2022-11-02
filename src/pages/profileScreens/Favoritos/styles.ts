import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {FontAwesome5, AntDesign} from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;

`;

export const FavList = styled.FlatList` 

flex:1;
 padding: 24px;
`
export const Hospitals = styled.View`

`
export const Header = styled.View`
flex-direction: row;
height: ${RFPercentage(17)}px;
width:100%;
align-items: center;
background-color: ${(props) => props.theme.colors.BACKGROUND};
padding: 40px 24px 0px;
`

export const Title = styled.Text`
      margin-top: 5px;
  font-family: ${(props) => props.theme.Fonts.Bold} ;
  font-size: ${RFValue(20)}px;
  color: ${(props) => props.theme.colors.MidGreen};
  
  
`


export const HospitalView = styled.TouchableOpacity.attrs({

  activeOpacity: .7

})`
  flex-direction:row;
  margin-top: 10px;
  width:100%;
  height: ${RFValue(50)}px;
  align-items: center;
   border-radius: 20px;
   border-width: 1.5px;
   border-color:${(props) => props.theme.colors.GreenLight};
  padding-left: 20px;
  background-color: ${(props) => props.theme.colors.White};

`

export const HospitalIcon = styled(FontAwesome5)`

  font-size: ${RFValue(19)}px;
  color: ${(props) => props.theme.colors.DarkGray};

`
export const HospitalName = styled.Text`

font-family: ${(props) => props.theme.Fonts.Medium} ;
font-size: ${RFValue(10)}px;
color: ${(props) => props.theme.colors.DarkGray};
padding-left: ${RFValue(14)}px;
margin-Bottom:-5px;

`
export const HospitalAddress = styled.Text`

font-family: ${(props) => props.theme.Fonts.Medium} ;
font-size: ${RFValue(9)}px;
color: ${(props) => props.theme.colors.DarkGray};
padding-left: ${RFValue(14)}px;

`
export const Return = styled.TouchableOpacity`
 

`

export const IconReturn = styled(AntDesign )`
margin-right: ${RFValue(50)}px ;
font-size: ${RFValue(25)}px;
color: ${(props) => props.theme.colors.MidGreen};
`