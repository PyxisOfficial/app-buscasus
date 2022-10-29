import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons, Feather, Ionicons, Octicons, } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.BACKGROUND};
`;

export const Search = styled.TouchableOpacity.attrs({

  activeOpacity: (0.7),

})`
 background-color: ${(props) => props.theme.colors.White};
 margin: ${RFValue(40)}px ${RFValue(20)}px;
 width:${RFValue(305)}px ;
 height: ${RFValue(33)}px;
 border-radius: 20px;
 flex-direction: row;
 font-size:${RFValue(11)}px;
 justify-content: center;
 padding-Top: 3px;
 position:absolute;
 z-index:1;
 align-items:center;
 align-self:center;
 
`;
export const SearchIcon = styled(MaterialIcons)`
font-size: ${RFValue(23)}px;
color: ${(props) => props.theme.colors.ItensInputColor};
margin-left: -15px;
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

`;


export const TabSearch = styled(Ionicons)`
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

export const SearchText = styled.Text`
font-size: ${RFValue(11)}px;
color: ${(props) => props.theme.colors.LightGray};
font-family: ${(props) => props.theme.Fonts.Medium} ;

`
export const Header = styled.View`
    
    background-color: ${(props) => props.theme.colors.White};
    height:${(RFPercentage(16))}px;
    align-items: center;
    flex-direction: row;
    padding: ${(RFValue(30))}px ${(RFValue(20))}px 0px;
    border-width: 1.5px;
    border-color: ${(props) => props.theme.colors.White} ;
    border-bottom-color:  ${(props) => props.theme.colors.MidGreen} ;

    
    `
export const ProfileUserIcon = styled.TouchableOpacity.attrs({

  activeOpacity: (.8)

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

export const UserIcon = styled.Image`

    height:${(RFValue(50))}px;
    width: ${(RFValue(50))}px;
    border-radius: 20px;
`