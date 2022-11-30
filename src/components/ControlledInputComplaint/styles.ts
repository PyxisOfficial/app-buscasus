import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
 `;

export const Input= styled.TextInput`
border-width: 1px;
border-radius: 10px;
border-color:  ${(props) => props.theme.colors.GreenLight};
width: 300px;
height: 120px;
padding-left: 10px;
`

export const Error = styled.Text`
font-size: ${RFValue(10)}px;
font-family: ${(props) => props.theme.Fonts.Regular};
color:  ${(props) => props.theme.colors.Attention};
 `;