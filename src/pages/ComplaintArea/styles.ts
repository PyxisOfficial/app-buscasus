import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { AntDesign, MaterialIcons, Feather, Ionicons, Octicons,EvilIcons  } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
margin-top: 40px;
flex-direction: row;
height: 15%;
align-items: center;
justify-content: center;

`
export const Return = styled.TouchableOpacity`
`

export const IconReturn = styled(AntDesign )`
margin-left: -75px;
font-size: ${RFValue(25)}px;
color: ${(props) => props.theme.colors.MidGreen};

`
export const TitleProject = styled.Text`

font-family: ${(props) => props.theme.Fonts.Bold} ;
font-size: ${RFValue(30)}px;
align-self: center;
margin-top: 5px;
color: ${(props) => props.theme.colors.MidGreen};

`
export const Title = styled.Text`
font-family: ${(props) => props.theme.Fonts.Medium} ;
font-size: ${RFValue(15)}px;
margin: 0px 0px 10px;
color: ${(props) => props.theme.colors.DarkGray};

`
export const WhatsHappend = styled.View`
margin-top: 20px;
align-items: center;

`
export const Footer = styled.View`
flex:.1;
padding: 30px;

`
export const Filds = styled.View`
flex: 0.9;

`