import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons, Feather, Ionicons, FontAwesome5, Octicons, AntDesign } from '@expo/vector-icons';


export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.BACKGROUND};
`;

export const Search = styled.View`
 flex-direction: row; 
 margin: ${RFValue(40)}px ${RFValue(20)}px ${RFValue(0)}px;
 height: ${RFValue(33)}px;
 justify-content: space-between;
 align-items: center;
`;

export const Filter = styled.TouchableOpacity.attrs({

activeOpacity: .7

})``

export const FilterIcon = styled(Ionicons)`

   font-size: ${RFValue(23)}px;
  color: ${(props) => props.theme.colors.MidGreen};

`

export const Input= styled.TextInput`
 background-color: ${(props) => props.theme.colors.White};
 width: 80%; ;
 border-radius: 20px;
 border-width: 1px;
 border-color: ${(props) => props.theme.colors.ItensInputColor};
 flex-direction: row;
 font-size:${RFValue(9)}px;
 padding-left:${RFValue(40)}px ;


  `;

export const SearchIcon = styled(MaterialIcons)`
  margin-top:10px;
  font-size: ${RFValue(17)}px;
  color: ${(props) => props.theme.colors.GreenLight};
  margin-left: 50px;
  position: absolute;
  z-index: 1;

`

export const HospitalSearchRecommended = styled.FlatList` 

flex:1;

`
export const RecommendedHospital = styled.View`

`

export const HeaderRecommend = styled.Text`
  font-family: ${(props) => props.theme.Fonts.Medium} ;
  font-size: ${RFValue(15)}px;
  color: ${(props) => props.theme.colors.MidGreen};
`

export const RecommendBox = styled.View`

flex:1;
padding: 25px;

`
export const RecommendedHospitalView = styled.TouchableOpacity.attrs({

  activeOpacity: .7

})`
  flex-direction:row;
  margin-top: 10px;
  width:100%;
  height: ${RFValue(33)}px;
  align-items: center;
   border-radius: 10px;
  padding-left: 10px;
  background-color: ${(props) => props.theme.colors.MidWhite};
`



export const SearchText = styled.Text`
font-size: ${RFValue(11)}px;
color: ${(props) => props.theme.colors.LightGray};
`
export const Return = styled.TouchableOpacity`
 

`

export const IconReturn = styled(AntDesign )`

font-size: ${RFValue(25)}px;
color: ${(props) => props.theme.colors.MidGreen};
`
export const Hospital = styled.View`

`


export const HospitalView = styled.TouchableOpacity.attrs({

  activeOpacity: .7

})`
  flex-direction:row;
  margin-top: 20px;
   width:100%;
  height: ${RFValue(40)}px;
  align-items: center;
  border-radius: 50px;
  padding-left: 10px;
  background-color: ${(props) => props.theme.colors.BACKGROUND};
  margin-Bottom:20px;
    border-width: 2px;
    border-color: ${(props) => props.theme.colors.GreenLight};
`

export const HospitalIcon = styled.Image`
    border-width: 2px;
    border-color: ${(props) => props.theme.colors.GreenLight};
    height:${(RFValue(50))}px;
    width: ${(RFValue(50))}px;
    border-radius: 50px;
    margin-left:-12px;

`
export const HospitalName = styled.Text`

font-family: ${(props) => props.theme.Fonts.Medium} ;
font-size: ${RFValue(9.5)}px;
color: ${(props) => props.theme.colors.MidGray};
padding-left: ${RFValue(10)}px;
margin-Bottom:-5px;

`
export const HospitalAddress = styled.Text`

font-family: ${(props) => props.theme.Fonts.Medium} ;
font-size: ${RFValue(9)}px;
color: ${(props) => props.theme.colors.MidGray};
padding-left: ${RFValue(10)}px;

`
export const HospitalSearch = styled.FlatList` 
border-top-width: 1.5px;
border-bottom-width: 1.5px;
border-color: ${(props) => props.theme.colors.GreenLight};
margin:24px;
flex:.9;
`

export const HospitalList = styled.View`

flex:1;

height: 100px;
`