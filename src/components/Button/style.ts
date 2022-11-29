import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
`;

export const ButtonStyle = styled.TouchableOpacity`

width: 50%;
height: ${RFPercentage(6)}px;
border-radius: 10px;
background-color: ${(props) => props.theme.colors.MidGreen};
align-self: center;
align-items: center ;
margin-top: ${RFValue(20)}px;
padding: ${RFValue(5)}px;
justify-content: center;

`
export const TextButton = styled.Text`
font-size: ${RFPercentage(2.2)}px;
color: ${(props) => props.theme.colors.White};
font-family: ${(props) => props.theme.Fonts.Medium} ;

`