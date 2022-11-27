import styled, {css} from 'styled-components/native';
import { AntDesign, MaterialIcons, Feather, Ionicons, Octicons,EvilIcons  } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface favProps{
  isActive: boolean
}

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.BACKGROUND};

`;

export const Title = styled.Text`
font-size: ${RFValue(14)}px;
color: ${(props) => props.theme.colors.DarkGray};
font-family: ${(props) => props.theme.Fonts.Medium} ;
text-align: center;
`
export const Return = styled.TouchableOpacity`
`

export const IconReturn = styled(AntDesign )`

font-size: ${RFValue(25)}px;

`
export const Favorite = styled.TouchableOpacity<favProps>`


border-radius: 100px;
width:  ${RFValue(30)}px;
height:${RFValue(30)}px;
align-items:center;
justify-content: center;
 
background-color: ${({theme, isActive}) =>  isActive ? theme.colors.Attention : theme.colors.White };

`
export const FavIcon = styled(AntDesign)<favProps>`

font-size: ${RFValue(20)}px;
color: ${({theme, isActive}) => isActive ? theme.colors.White : theme.colors.DarkGray};

`

export const Actions = styled.View`

flex-direction: row ;
justify-content: space-between;
margin:${RFValue(40)}px ${RFValue(20)}px ${RFValue(10)}px ${RFValue(20)}px;

`
export const Header = styled.View`
align-items: center;
justify-content: center; 
flex-direction: row ;
justify-content: space-between;
margin:${RFValue(80)}px ${RFValue(10)}px ${RFValue(10)}px ${RFValue(10)}px;
`


export const Search =styled.TextInput`
align-self: center;
background-color: ${(props) => props.theme.colors.White};
width:90%;
 border-radius: 20px;
 border-width: 1px;
 border-color: ${(props) => props.theme.colors.MidGreen};
 flex-direction: row;
 font-size:${RFValue(10)}px;
 padding-left:${RFValue(20)}px ;

`

export  const HospitalPicture = styled.Image`
height: ${RFValue(180)}px;
width:90%;  
margin:${RFValue(24)}px;
align-self: center;
border-radius: 20px;
border-width: 2px;
border-color: ${(props) => props.theme.colors.MidGreen};
`


 export const HospitalInfo = styled.View`
 
 padding:${RFValue(14)}px   ${RFValue(24)}px;
 
 `
 export const HeaderInfo = styled.View`
 margin-top: 5px;
 flex-direction: row;
 
 `
 export const Icon = styled(Feather)`
 color: ${(props) => props.theme.colors.MidGreen};
 font-size: ${RFValue(15)}px;
 margin-right: 5px;

 ` 
 export const Info = styled.Text`
 
font-size: ${RFValue(12)}px;
color: ${(props) => props.theme.colors.DarkGray};
font-family: ${(props) => props.theme.Fonts.Medium} ; 
 
 `
 export const Primary = styled.Text`
 
 font-size: ${RFValue(11)}px;
color: ${(props) => props.theme.colors.MidGray};
font-family: ${(props) => props.theme.Fonts.Regular} ; 
 
 `
 export const Secundary = styled.Text`
 
 font-size: ${RFValue(11)}px;
color: ${(props) => props.theme.colors.MidGray};
font-family: ${(props) => props.theme.Fonts.Regular} ; 
 
 `
 export const Content = styled.View`
  
 `
 export const Footer = styled.View`

margin-bottom: 15%;
 

`
export const Filds = styled.View`
  flex:0.7;
  justify-content: space-between;
`

 export const Services = styled.View`
 
 flex-direction: row;
 align-items: center;
 justify-content: center;
  
 `
 export const DutyButton = styled.TouchableOpacity.attrs({

  activeOpacity: .7
 })`
 
 width: 45%;
height: ${RFPercentage(5)}px;
border-radius: 20px;
border-width:1px;
border-color: ${(props) => props.theme.colors.MidGreen};
align-self: center;
align-items: center ;
margin-top: ${RFValue(20)}px;
padding: ${RFValue(5)}px;
justify-content: center;
margin-right: ${RFValue(5)}px;
 `
 export const DoctorsButton = styled.TouchableOpacity.attrs({

  activeOpacity: .7
 })`
 
 width: 45%;
height: ${RFPercentage(5)}px;
border-radius: 20px;
border-width:1px;
border-color: ${(props) => props.theme.colors.MidGreen};
align-self: center;
align-items: center ;
margin-top: ${RFValue(20)}px;
margin-left: ${RFValue(5)}px;
padding: ${RFValue(5)}px;
justify-content: center;
 `

export const TitleButton = styled.Text`
font-size: ${RFValue(11)}px;
color: ${(props) => props.theme.colors.MidGreen};
font-family: ${(props) => props.theme.Fonts.Medium} ;
`

