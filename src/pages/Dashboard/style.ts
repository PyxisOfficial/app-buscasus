import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {MaterialIcons, Feather, Ionicons} from '@expo/vector-icons';


export const Container = styled.View`
  flex: 1;

`;

export const Search = styled.TouchableOpacity.attrs({

  activeOpacity : (0.7),

})`
 background-color: ${(props) => props.theme.colors.White};
 margin: ${RFValue(40)}px ${RFValue(20)}px;
 width:${RFValue(305)}px ;
 height: ${RFValue(33)}px;
 border-radius: 20px;

 font-size:${RFValue(11)}px;
 justify-content: center;
 padding-Top: 3px;
 position:absolute;
 z-index:1;
 align-items:center;
 
`;
export const SearchIcon = styled(MaterialIcons)`
margin-top:10px;
font-size: ${RFValue(23)}px;
color: ${(props) => props.theme.colors.ItensInputColor};
position: absolute;
margin: ${RFValue(46)}px ${RFValue(30)}px;
z-index: 2;

`

export const Map  = styled.ImageBackground`
flex: 1;

`;

export const Tab = styled.View`

background-color: ${(props) => props.theme.colors.White} ;
width: 100%;
height: ${RFValue(53)}px;
align-self: flex-end;
justify-content: space-between;
flex-direction: row;
align-items: center;
padding: 0px ${RFValue(40)}px ;
margin-top:${RFPercentage(96)}px ;
position:absolute;
 z-index:1;
`;

export const UserAccont = styled(Ionicons)`
font-size: ${RFValue(35)}px;
color: ${(props) => props.theme.colors.MidGray};

`;


export const Settings  = styled(Ionicons)`
font-size: ${RFValue(35)}px;
color: ${(props) => props.theme.colors.MidGray};

`;



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
export const UserAccontButton = styled.TouchableOpacity.attrs({

  activeOpacity : (0.5),

})``


export const SettingsButton = styled.TouchableOpacity.attrs({

  activeOpacity : (0.5),

})``

export const SearchText = styled.Text`
font-size: ${RFValue(11)}px;
color: ${(props) => props.theme.colors.LightGray};
font-family: ${(props) => props.theme.Fonts.Medium} ;

`

