import styled from 'styled-components/native';
import { AntDesign, MaterialIcons, Feather, Ionicons, Octicons, } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.BACKGROUND};

`;

export const Title = styled.Text`
font-size: ${RFValue(15)}px;
color: ${(props) => props.theme.colors.DarkGray};
font-family: ${(props) => props.theme.Fonts.Medium} ;
`

export const IconReturn = styled(AntDesign)`

font-size: ${RFValue(23)}px;
margin:${RFValue(40)}px ${RFValue(20)}px ${RFValue(10)}px ${RFValue(20)}px;

`

export const Header = styled.View`

flex-direction: row;
align-items: center;
justify-content: center; 
margin-bottom:${RFValue(10)}px ;
`

export const Return = styled.TouchableOpacity`
`

export const Search =styled.TextInput`
align-self: center;
background-color: ${(props) => props.theme.colors.White};
 width:${RFPercentage(50)}px ;
 border-radius: 20px;
 border-width: 1px;
 border-color: ${(props) => props.theme.colors.ItensInputColor};
 flex-direction: row;
 font-size:${RFValue(11)}px;
 padding-left:${RFValue(40)}px ;

`

export  const HospitalPicture = styled.View`
height: ${RFValue(200)}px;
width:${RFValue(340)}px;  
background-color: ${(props) => props.theme.colors.ItensInputColor};
margin-right:25px;

`

export const HospitalPhoto  = styled.ScrollView`
padding: ${RFValue(20)}px;
flex-Grow:0;
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
 width: 100%;
 padding: 30px;
 

`
export const Filds = styled.View`
  flex:0.7;
  justify-content: space-between;
`

 export const Services = styled.View`
 
 flex-direction: row;
 align-items: center;
 justify-content: center;
 justify-content: space-around;
 
 `
 export const DutyButton = styled.TouchableOpacity.attrs({

  activeOpacity: .7
 })`
 
 width: ${RFValue(150)}px;
height: ${RFPercentage(5)}px;
border-radius: 20px;
border-width:1px;
border-color: ${(props) => props.theme.colors.MidGreen};
align-self: center;
align-items: center ;
margin-top: ${RFValue(20)}px;
padding: ${RFValue(5)}px;
justify-content: center;

 `
 export const DoctorsButton = styled.TouchableOpacity.attrs({

  activeOpacity: .7
 })`
 
 width: ${RFValue(150)}px;
height: ${RFPercentage(5)}px;
border-radius: 20px;
border-width:1px;
border-color: ${(props) => props.theme.colors.MidGreen};
align-self: center;
align-items: center ;
margin-top: ${RFValue(20)}px;
padding: ${RFValue(5)}px;
justify-content: center;
 `

export const TitleButton = styled.Text`
font-size: ${RFValue(13)}px;
color: ${(props) => props.theme.colors.MidGreen};
font-family: ${(props) => props.theme.Fonts.Medium} ;
`