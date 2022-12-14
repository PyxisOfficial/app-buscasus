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
    border-radius: 100px;
    border-width: 1.5px;
    border-color: ${({ theme }) => theme.colors.MidGreen};
`

export const Profile = styled.View`

flex-direction: row;
align-items: center;

`
export const Logout = styled.TouchableOpacity.attrs({
  activeOpacity: .7
})`

`
export const LogoutTitle = styled.Text`


font-size: ${RFValue(15)}px;
color: ${(props) => props.theme.colors.MidGreen};
font-family: ${(props) => props.theme.Fonts.Medium};

`
export const HeaderContent = styled.View`

flex-direction: row;
padding:30px 24px  ; 
justify-content: center;
align-items: center;

`

export const Title = styled.Text`
font-family: ${(props) => props.theme.Fonts.Bold} ;
font-size: ${RFValue(30)}px;
align-self: center;
margin-top: 5px;
color: ${(props) => props.theme.colors.MidGreen};
`

export const Search = styled.TouchableOpacity.attrs({

  activeOpacity: (0.7),

})`

 background-color: ${(props) => props.theme.colors.White};
 margin: ${RFValue(-10)}px ${RFValue(0)}px;
 width: 90%;
 height: ${RFPercentage(5)}px;
 border-radius: 20px;
 flex-direction: row;
 font-size:${RFValue(11)}px;
 padding: ${RFValue(2)}px  ${RFValue(10)}px ${RFValue(0)}px;
 align-items:center;
align-self:center;
 border-width: 1px;
 border-color: ${({ theme }) => theme.colors.GreenLight};
 
`
export const SearchIcon = styled(MaterialIcons)`
margin-right: ${RFValue(5)}px;
font-size: ${RFValue(25)}px;
color: ${(props) => props.theme.colors.GreenLight};


`



export const SearchText = styled.Text`
font-size: ${RFValue(11)}px;
color: ${(props) => props.theme.colors.LightGray};
font-family: ${(props) => props.theme.Fonts.Medium} ;

`




export const SearchContent = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom:30px;
`


export const ShortCut = styled.View`
width: 100%;
align-items: center;
flex-direction: row;
justify-content: space-between;

`
export const ShortCutHospital = styled.View`

width:50%;

`
export const NearbyHospitals = styled.TouchableOpacity.attrs({

  activeOpacity: .7,
})`
background-color: ${(props) => props.theme.colors.BACKGROUND};
align-items:center;
justify-content:center;
border-width:1px;
border-color: ${(props) => props.theme.colors.GreenLight};
border-radius:7px;
width: 85%;
height:${(RFPercentage(8))}px;
margin:${RFValue(0)}px 1% 5% 10%;;


`
export const AllHospitals = styled.TouchableOpacity.attrs({

  activeOpacity: .7,
})`
background-color: ${(props) => props.theme.colors.BACKGROUND};
align-items:center;
justify-content:center;
border-width:1px;
border-color: ${(props) => props.theme.colors.GreenLight};
border-radius:7px;
width: 85%;
height:${(RFPercentage(8))}px;
margin:${RFValue(0)}px 1% ${RFValue(0)}px 10%;


`
export const ShortCutDoctor = styled.View`

width:50%;

`
export const Specialty = styled.TouchableOpacity.attrs({

  activeOpacity: .7,
})`
background-color: ${(props) => props.theme.colors.BACKGROUND};
align-items:center;
justify-content:center;
border-width:1px;
border-color: ${(props) => props.theme.colors.GreenLight};
border-radius:7px;
width: 85%;
height:${(RFPercentage(8))}px;
margin:${RFValue(0)}px 10% 5% 5%;
`
export const AllDoctors = styled.TouchableOpacity.attrs({

  activeOpacity: .7,
})`
background-color: ${(props) => props.theme.colors.BACKGROUND};
align-items:center;
justify-content:center;
border-width:1px;
border-color: ${(props) => props.theme.colors.GreenLight};
border-radius:7px;
width: 85%;
height:${(RFPercentage(8))}px;
margin:${RFValue(0)}px 10% ${RFValue(0)}px 5%;
`

export const ShortCutTitle = styled.Text`

font-family: ${(props) => props.theme.Fonts.Bold} ;
font-size: ${RFValue(20)}px;
margin: 60px 30px 20px 30px;
color: ${(props) => props.theme.colors.MidGreen};

`
export const PatternText = styled.Text`

font-family: ${(props) => props.theme.Fonts.Medium} ;
font-size: ${RFValue(12)}px;
margin: -3px 0px;
color: ${(props) => props.theme.colors.DarkGray};
`
