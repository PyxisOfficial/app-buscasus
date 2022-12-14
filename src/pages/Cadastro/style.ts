import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {MaterialIcons, Ionicons} from '@expo/vector-icons';

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
export const Input= styled.TextInput`

width: ${RFValue(235)}px;
border-bottom-color:${(props) => props.theme.colors.DarkGreen} ;
border-color:  ${(props) => props.theme.colors.BACKGROUND};
padding-top:10px;


`
export const InputImage = styled(MaterialIcons)`
margin: 10px 5px 0px 0px;
font-size: ${RFValue(22)}px;
color: ${(props) => props.theme.colors.DarkGreen};


`
export const InputBox = styled.View`
padding-top: 10px;
flex-direction: row;
align-self: center;


`
export const ButtonStyle = styled.TouchableOpacity`

width: ${RFValue(150)}px;
height: ${RFPercentage(5)}px;
border-radius: 20px;
background-color: ${(props) => props.theme.colors.GreenLight};
align-self: center;
justify-content: center;
align-items: center ;


`
export const TextButtonStyle = styled.Text`
font-family: ${(props) => props.theme.Fonts.Bold};
font-size: ${RFValue(18)}px;
align-self: center;

color: ${(props) => props.theme.colors.BACKGROUND};

`
export const LinkBox = styled.View`
margin-top: ${RFValue(70)}px;
flex-direction: row;
align-self: center;
`
export const TextBeforeLink = styled.Text`

font-size: 12px;
font-family: ${(props) => props.theme.Fonts.Regular};
`
export const Link = styled.TouchableOpacity`

background-color: ${(props) => props.theme.colors.BACKGROUND};

`
;
export const TextLink = styled.Text`
font-size: 12px;
color:${(props) => props.theme.colors.MidGreen} ;
font-family: ${(props) => props.theme.Fonts.Medium};
`

export const Onda = styled.Image`
flex: 1;
width: 100%;


`
export const LogoBox = styled.View`

flex-direction: row;
align-items: center;
justify-content: center;
margin-top: ${RFValue(100)}px;
margin-left: ${RFValue(-20)}px;

`
export const HideButton = styled.TouchableHighlight`
`

export const HideIcon = styled(Ionicons)`
margin-top:10px;
font-size: ${RFValue(22)}px;
color: ${(props) => props.theme.colors.MidGreen};
margin-left: -30px;
`