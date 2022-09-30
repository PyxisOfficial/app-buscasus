import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
 `;

export const Input= styled.TextInput`

width: ${RFValue(235)}px;
border-bottom-color:${(props) => props.theme.colors.DarkGreen} ;
border-color:  ${(props) => props.theme.colors.BACKGROUND};
padding-top:10px;


`

export const Error = styled.Text`
font-size: ${RFValue(10)}px;
font-family: ${(props) => props.theme.Fonts.Regular};
color:  ${(props) => props.theme.colors.Attention};
 `;