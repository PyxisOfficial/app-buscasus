import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {MaterialIcons, Feather, Ionicons, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Search = styled.TextInput`

 background-color: ${(props) => props.theme.colors.White};
 margin: ${RFValue(-10)}px ${RFValue(10)}px;
 width:80% ;
 height: ${RFPercentage(4)}px;
 border-radius: 20px;
 flex-direction: row;
 font-size:${RFValue(11)}px;
 padding: ${RFValue(2)}px  ${RFValue(45)}px ${RFValue(0)}px;
 align-items:center;
align-self:center;
 border-width: 1px;
 border-color: ${({ theme }) => theme.colors.GreenLight};
 font-size: ${RFValue(10)}px;
 font-family: ${(props) => props.theme.Fonts.Medium} ;
 padding-top: 3px;
`
export const SearchIcon = styled(MaterialIcons)`
margin-left: ${RFValue(45)}px;
;
font-size: ${RFValue(20)}px;
color: ${(props) => props.theme.colors.GreenLight};
z-index: 1;
position: absolute;

`
export const SearchContent = styled.View`
width: 90%;
flex-direction: row;
align-items: center;
margin-top:${RFPercentage(17)}px;
margin-bottom:${RFPercentage(5)}px;
align-self: center;
`
export const HospitalSearch = styled.FlatList` 
border-top-width: 1.5px;
border-bottom-width: 1.5px;
border-color: ${(props) => props.theme.colors.GreenLight};
margin:24px;
flex:.9;

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
export const Return = styled.TouchableOpacity`
 

`

export const IconReturn = styled(AntDesign )`

font-size: ${RFValue(25)}px;
color: ${(props) => props.theme.colors.MidGreen};
`
