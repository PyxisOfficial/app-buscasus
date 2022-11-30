import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather, Octicons, AntDesign, Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.White} ;
width: 100%;
height: ${RFPercentage(10)}px;
align-self: flex-end;
justify-content: space-between;
flex-direction: row;
align-items: center;
padding: 0px ${RFValue(40)}px ;
border-width: 1.5px;
border-color: ${(props) => props.theme.colors.MidGreen} ;
border-bottom-color:  ${(props) => props.theme.colors.White} ;;
border-top-left-radius: 40px;
border-top-right-radius: 40px;

`;

export const UserAccont = styled(Ionicons)`
font-size: ${RFValue(30)}px;
color: ${(props) => props.theme.colors.MidGreen};

`;


export const TabSearch = styled(AntDesign)`
font-size: ${RFValue(30)}px;
color: ${(props) => props.theme.colors.MidGreen};

`;



export const VoiceSearchButton = styled.TouchableOpacity.attrs({

  activeOpacity: (0.9),

})`

background-color: ${(props) => props.theme.colors.MidGreen};
height: ${RFValue(90)}px;
width: ${RFValue(90)}px;
align-items:center;
justify-content: center;
margin-bottom:${RFValue(73)}px;
border-radius: 100px;


`
export const VoiceIcon = styled(Feather)`
font-size: ${RFValue(55)}px;
color: ${(props) => props.theme.colors.White};
`
export const UserAccontButton = styled.TouchableOpacity.attrs({

  activeOpacity: (0.5),

})``


export const TabSearchButton = styled.TouchableOpacity.attrs({

  activeOpacity: (0.5),

})``