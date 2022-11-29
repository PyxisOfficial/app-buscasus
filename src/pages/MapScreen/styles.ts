import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {MaterialIcons, Feather, Ionicons, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.BACKGROUND};
`;
export const HeaderSearch = styled.View`
width: 90%;
flex-direction: row;
align-items: center;
margin-top:${RFPercentage(12)}px;
margin-bottom:${RFPercentage(5)}px;
align-self: center;

`
export const Input = styled.TextInput`

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
font-size: ${RFValue(20)}px;
color: ${(props) => props.theme.colors.GreenLight};
z-index: 1;
position: absolute;

`