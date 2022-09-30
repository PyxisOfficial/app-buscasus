import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {MaterialIcons} from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.BACKGROUND};

`;

export const ProjectName = styled.Text`
font-family: ${(props) => props.theme.Fonts.Bold} ;
font-size: ${RFValue(40)}px;
align-self: center;
margin-top: -30px;

color: ${(props) => props.theme.colors.DarkGreen};
`
export const Input= styled.TextInput`

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
export const ButtonStyle = styled.TouchableOpacity`

width: ${RFValue(150)}px;
height: ${RFPercentage(5)}px;
border-radius: 20px;
background-color: ${(props) => props.theme.colors.GreenLight};
align-self: center;
align-items: center ;
margin-top: 10px;
padding: ${RFValue(5)}px;
`
export const TextButtonStyle = styled.Text`
font-family: ${(props) => props.theme.Fonts.Bold};
font-size: 18px;
color: ${(props) => props.theme.colors.BACKGROUND};

`
export const LinkBox = styled.View`

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

export const Contents = styled.View`

margin-top: ${RFValue(25)}px;


`

export const Onda = styled.Image`
flex: 1;
width: 100%;
margin-top: ${RFPercentage(5)}px;
`
