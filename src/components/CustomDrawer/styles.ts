import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons, Feather, Ionicons, Octicons, AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
    
    background-color: ${(props) => props.theme.colors.White};
    height:18%;
    align-items: center;
    flex-direction: row;
    padding: ${(RFValue(40))}px ${(RFValue(20))}px 0px;
    border-width: 1.5px;
    border-color: ${(props) => props.theme.colors.White} ;
    border-bottom-color:  ${(props) => props.theme.colors.MidGreen} ;
    justify-content: space-between;
    
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
    margin-top: 4px;
    font-size: 20px;
    color:${(props) => props.theme.colors.MidGreen} ;
    font-family: ${(props) => props.theme.Fonts.Bold};
  
    `

export const TextHeaderBox = styled.View`
flex-direction: column;
padding: ${(RFValue(10))}px;

`


export const UserIcon = styled.Image`

    height:${(RFValue(40))}px;
    width: ${(RFValue(40))}px;
    border-radius: 100px;
    border-width: 1.5px;
    border-color: ${({ theme }) => theme.colors.MidGreen};
`

export const Profile = styled.TouchableOpacity`

flex-direction: row;
align-items: center;

`
export const OthersFunctionalities = styled.View`
  
align-items: center;
margin-top: 20px;


  `
export const Favorites = styled.TouchableOpacity.attrs({

  activeOpacity: .7,
})`
  background-color: ${(props) => props.theme.colors.BACKGROUND};
  height:${(RFPercentage(6))}px;
  width: 90%;
  border-width:1px;
  border-color: ${(props) => props.theme.colors.LightGray};
  border-radius:7px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  `
export const IconView = styled.View`
  width: ${RFValue(50)}px;
  height: ${RFValue(41)}px;
  background-color: ${(props) => props.theme.colors.GreenLight};
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  margin-left:-1px;
 
  align-items: center;
  justify-content: center;
  margin-right:10px;
  `
export const Icon = styled(Feather)`
  color: ${(props) => props.theme.colors.White};
  font-size: ${RFValue(25)}px;
  `
export const Activy = styled.TouchableOpacity.attrs({

  activeOpacity: .7,
})`
background-color: ${(props) => props.theme.colors.BACKGROUND};
  height:${(RFPercentage(6))}px;
  width: 90%;
  border-width:1px;
  border-color: ${(props) => props.theme.colors.LightGray};
  border-radius:7px;
  flex-direction: row;
  align-items: center;
  
  `
  export const PatternText = styled.Text`

  font-family: ${(props) => props.theme.Fonts.Medium} ;
  font-size: ${RFValue(12)}px;
  margin: -3px 0px;
  color: ${(props) => props.theme.colors.DarkGray};
  `
 export const Settings = styled.View`
 margin-top:15px;
 flex-direction: row;
align-items: center;
margin-left: -1px;
 `
 export const Help = styled.View`
 margin-left: -1px;
  margin-top:15px;
 flex-direction: row;
align-items: center;
 `
 export const Title = styled.Text`

 font-family: ${(props) => props.theme.Fonts.Medium} ;
  font-size: ${RFValue(12)}px;
  margin: -3px 0px;
  color: ${(props) => props.theme.colors.MidGreen};
 
 `
 export const DrawerItens = styled.View`
 margin:20px  24px 24px;
 
 ` 
 export const IconDrawer = styled(Octicons)`
 color: ${(props) => props.theme.colors.MidGreen};
 font-size: ${RFValue(20)}px;
 margin-right: 15px;
 `

 export const IconButton = styled.TouchableHighlight`
 
 border-radius: 100px;
 
 `