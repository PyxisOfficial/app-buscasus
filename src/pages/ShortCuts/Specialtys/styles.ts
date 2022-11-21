import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {MaterialIcons, MaterialCommunityIcons  } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Search = styled.TextInput`

 background-color: ${(props) => props.theme.colors.White};
 margin: ${RFValue(-10)}px ${RFValue(0)}px;
 width:100% ;
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
margin-left: ${RFValue(15)}px;
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
export const SpecialtySearch = styled.FlatList` 
border-top-width: 1.5px;
border-bottom-width: 1.5px;
border-color: ${(props) => props.theme.colors.GreenLight};
margin:24px;
flex:.9;

`

export const Specialty = styled.View`
flex-direction: row;
align-items: center;
 justify-content: space-between;
 width: 100%;
 padding: 0px 10px;
`


export const SpecialtyView = styled.TouchableOpacity.attrs({

  activeOpacity: .7

})`
  flex-direction:row;
  margin-top: 20px;
   width:80%;
  height: ${RFValue(40)}px;
  align-items: center;
  border-radius: 50px;
  padding-left: 10px;
  background-color: ${(props) => props.theme.colors.BACKGROUND};
  margin-Bottom:20px;
    border-width: 2px;
    border-color: ${(props) => props.theme.colors.GreenLight};
    align-self:center;
   
`

export const SpecialtyIcon = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(22)}px;
  color: ${(props) => props.theme.colors.GreenLight};
   
`
export const SpecialtyName = styled.Text`

font-family: ${(props) => props.theme.Fonts.Bold} ;
font-size: ${RFValue(12)}px;
color: ${(props) => props.theme.colors.DarkGray};



`
export const GoTo = styled(MaterialIcons)`
  font-size: ${RFValue(20)}px;
  color: ${(props) => props.theme.colors.GreenLight};
   
`