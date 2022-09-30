import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons'; 
export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
    
    background-color: ${(props) => props.theme.colors.GreenLight};
    height:${(RFPercentage(20))}px;
    align-items: center;
    flex-direction: row;
    padding: ${(RFValue(30))}px ${(RFValue(20))}px 0px;
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
    color:${(props) => props.theme.colors.DarkWhite} ;
    font-family: ${(props) => props.theme.Fonts.Bold};
    margin-top: -10px;
    `

export const TextHeaderBox = styled.View`
flex-direction: column;
padding: ${(RFValue(10))}px;

`
export const AutoMessage = styled.Text`
    font-size: 15px;
    color:${(props) => props.theme.colors.DarkWhite} ;
    font-family: ${(props) => props.theme.Fonts.Medium};
    
    
    `
export const Logout = styled(MaterialIcons)`
  
    font-size: 35px;
    color:${(props) => props.theme.colors.DarkWhite} ;
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