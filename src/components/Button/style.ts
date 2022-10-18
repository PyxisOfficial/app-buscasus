import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const ButtonStyle = styled.TouchableOpacity`

width: ${RFValue(150)}px;
height: ${RFPercentage(5)}px;
border-radius: 20px;
background-color: ${(props) => props.theme.colors.GreenLight};
align-self: center;
align-items: center ;
margin-top: ${RFValue(20)}px;
padding: ${RFValue(5)}px;
justify-content: center;

`
export const TextButton = styled.Text`
font-size: ${RFPercentage(2.2)}px;
color: ${(props) => props.theme.colors.White};
font-family: ${(props) => props.theme.Fonts.Bold} ;

`