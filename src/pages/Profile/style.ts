import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {MaterialIcons, Feather, Octicons, FontAwesome5, FontAwesome} from '@expo/vector-icons';
export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
    
    background-color: ${(props) => props.theme.colors.White};
    height:${(RFPercentage(16))}px;
    align-items: center;
    flex-direction: row;
    padding: ${(RFValue(30))}px ${(RFValue(20))}px 0px;
    border-width: 1.5px;
border-color: ${(props) => props.theme.colors.White} ;
border-bottom-color:  ${(props) => props.theme.colors.MidGreen} ;;

    
    `
export const ProfileUserIcon = styled.TouchableOpacity.attrs({

    activeOpacity : (.8)

})`
    background-color: ${(props) => props.theme.colors.ItensInputColor};
    height:${(RFValue(50))}px;
    width: ${(RFValue(50))}px;
    border-radius: 20px;
    `
export const UserName = styled.Text`
   
    font-size: 20px;
    color:${(props) => props.theme.colors.MidGreen} ;
    font-family: ${(props) => props.theme.Fonts.Bold};
    margin-top: -10px;
    `

export const TextHeaderBox = styled.View`
flex-direction: column;
padding: ${(RFValue(10))}px;

`
export const AutoMessage = styled.Text`
    font-size: 15px;
    color:${(props) => props.theme.colors.MidGreen} ;
    font-family: ${(props) => props.theme.Fonts.Medium};
    
    
    `
export const Logout = styled(MaterialIcons)`
  
    font-size: 35px;
    color:${(props) => props.theme.colors.MidGreen} ;
    padding-left: ${(RFValue(60))}px;
    `
export const UserIcon = styled.Image`

    height:${(RFValue(50))}px;
    width: ${(RFValue(50))}px;
    border-radius: 20px;
`
export const LogoutButton = styled.TouchableOpacity.attrs({

    activeOpacity : (.8)

})`

`

export const Tab = styled.View`

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
export const UserAccont = styled(Octicons)`
font-size: ${RFValue(30)}px;
color: ${(props) => props.theme.colors.MidGreen};
`



export const Settings  = styled(Octicons)`
font-size: ${RFValue(30)}px;
color: ${(props) => props.theme.colors.MidGreen};

`;
export const UserAccontButton = styled.TouchableOpacity.attrs({

    activeOpacity : (0.5),
  
  })``
  
  
  export const SettingsButton = styled.TouchableOpacity.attrs({
  
    activeOpacity : (0.5),
  
  })``

  export const VoiceSearchButton = styled.TouchableOpacity.attrs({

    activeOpacity : (0.9),
  
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
