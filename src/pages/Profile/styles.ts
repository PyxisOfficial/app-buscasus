import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {MaterialIcons, Feather, Octicons, FontAwesome5, FontAwesome} from '@expo/vector-icons';
export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
    
    background-color: ${(props) => props.theme.colors.White};
    height:${(RFPercentage(20))}px;
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
    border-radius: 100px;
    `
export const UserName = styled.Text`
   
    font-size: 17px;
    color:${(props) => props.theme.colors.MidGreen} ;
    font-family: ${(props) => props.theme.Fonts.Bold};
    margin-top: -10px;
    `

export const TextHeaderBox = styled.View`
flex-direction: column;
padding: ${(RFValue(10))}px;
`
export const AutoMessage = styled.Text`
    font-size: 13px;
    color:${(props) => props.theme.colors.MidGreen} ;
    font-family: ${(props) => props.theme.Fonts.Medium};
    
    
    `

export const UserIcon = styled.Image`
    height:${(RFValue(50))}px;
    width: ${(RFValue(50))}px;
    border-radius: 100px;
    border-width: 1.5px;
    border-color:${(props) => props.theme.colors.MidGreen} ;
`


