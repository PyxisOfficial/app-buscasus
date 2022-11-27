import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {MaterialIcons, Feather, Ionicons, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  
`;

export const Header = styled.View`

align-items: center;
margin-top: 20%;

`

export const HospitalSearch = styled.FlatList` 
border-top-width: 1.5px;
border-bottom-width: 1.5px;
border-color: ${(props) => props.theme.colors.GreenLight};
margin:24px;
flex:.7;

`
export const Hospital = styled.View`

`


export const HospitalView = styled.TouchableOpacity.attrs({

  activeOpacity: .7

})`
  flex-direction:row;
  margin-top: 20px;
   width:100%;
  height: ${RFValue(40)}px;
  align-items: center;
  border-radius: 50px;
  padding-left: 10px;
  background-color: ${(props) => props.theme.colors.BACKGROUND};
  margin-Bottom:20px;
    border-width: 2px;
    border-color: ${(props) => props.theme.colors.GreenLight};
`

export const HospitalIcon = styled.Image`
    border-width: 2px;
    border-color: ${(props) => props.theme.colors.GreenLight};
    height:${(RFValue(50))}px;
    width: ${(RFValue(50))}px;
    border-radius: 50px;
    margin-left:-12px;

`
export const HospitalName = styled.Text`

font-family: ${(props) => props.theme.Fonts.Medium} ;
font-size: ${RFValue(9.5)}px;
color: ${(props) => props.theme.colors.MidGray};
padding-left: ${RFValue(10)}px;
margin-Bottom:-5px;

`
export const HospitalAddress = styled.Text`

font-family: ${(props) => props.theme.Fonts.Medium} ;
font-size: ${RFValue(9)}px;
color: ${(props) => props.theme.colors.MidGray};
padding-left: ${RFValue(10)}px;

`
export const GoToMap = styled.TouchableOpacity`

border-width: 2px;
border-color: ${(props) => props.theme.colors.DarkGreen};


`
export const MapView = styled.View`

align-items: center;
justify-content: center;

`
export const Title = styled.Text`

font-family: ${(props) => props.theme.Fonts.Medium} ;
font-size: ${RFValue(25)}px;
color: ${(props) => props.theme.colors.DarkGreen};
padding-left: ${RFValue(10)}px;

`

export const Text = styled.Text`
margin-left:30;
font-family: ${(props) => props.theme.Fonts.Medium} ;
font-size: ${RFValue(20)}px;
color: ${(props) => props.theme.colors.DarkGreen};
padding-left: ${RFValue(10)}px;

`