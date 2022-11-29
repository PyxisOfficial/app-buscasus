import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'


export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.BACKGROUND};
  
`;

export const ProjectName = styled.Text`
font-family: ${(props) => props.theme.Fonts.Bold} ;
font-size: ${RFValue(35)}px;
align-self: center;
margin-top: 10px;
color: ${(props) => props.theme.colors.MidGreen};
`
export const Input = styled.TextInput`

width: ${RFValue(235)}px;
border-bottom-color:${(props) => props.theme.colors.DarkGreen} ;
border-color:  ${(props) => props.theme.colors.BACKGROUND};
padding-top:10px;

`
export const InputImage = styled(MaterialIcons)`
margin-top:10px;
font-size: ${RFValue(22)}px;
color: ${(props) => props.theme.colors.MidGreen};

`
export const InputBox = styled.View`
padding-top: 20px;
flex-direction: row;
align-self: center;
border-width: 2px;
border-radius:5px;
border-bottom-color:${(props) => props.theme.colors.DarkGreen} ;
border-color:  ${(props) => props.theme.colors.BACKGROUND};

`

export const Onda = styled.Image`
flex: 1;
width: 100%;
margin-top: ${RFPercentage(10)}px;

`
export const LogoBox = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
margin: ${RFPercentage(18)}px ${RFValue(0)}px ${RFValue(20)}px ${RFValue(-20)}px;
 

`
export const HideButton = styled.TouchableHighlight`
`

export const HideIcon = styled(Ionicons)`
margin-top:10px;
font-size: ${RFValue(22)}px;
color: ${(props) => props.theme.colors.MidGreen};
margin-left: -30px;
`

export const LoginOptions = styled.View`

width:50%;
align-self: center;
align-items: center;
margin-top: ${RFPercentage(10)}px;


 `;

export const SingUp = styled.TouchableOpacity`
 width: 100%;
  border-width: 1.5px;
  border-radius: 10px;
  border-color: ${({theme}) => theme.colors.GreenLight};
  height: ${RFPercentage(7)}px;
  flex-direction: row;
  align-items: center;
margin: ${RFValue(10)}px ;
justify-content: center;

 `;
export const Icon = styled.Image`
margin-right: ${RFValue(10)}px;
 `;
export const Title = styled.Text`
margin-top: 5px;
  text-align: center;
  font-size: 10px;
font-family: ${(props) => props.theme.Fonts.Medium};
  
 `;
