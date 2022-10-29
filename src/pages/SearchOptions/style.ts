import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons, Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons';


export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.BACKGROUND};
`;

export const Search = styled.View`
 flex-direction: row; 
 margin: ${RFValue(40)}px ${RFValue(20)}px;
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
 width:${RFPercentage(45)}px ;
 border-radius: 20px;
 border-width: 1px;
 border-color: ${(props) => props.theme.colors.ItensInputColor};
 flex-direction: row;
 font-size:${RFValue(11)}px;
 padding-left:${RFValue(40)}px ;


  `;

export const SearchIcon = styled(MaterialIcons)`
  margin-top:10px;
  font-size: ${RFValue(23)}px;
  color: ${(props) => props.theme.colors.ItensInputColor};
  margin-left: 10px;
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
  width:${RFPercentage(48)}px ;
  height: ${RFValue(33)}px;
  align-items: center;
   border-radius: 10px;
  padding-left: 10px;
  background-color: ${(props) => props.theme.colors.MidWhite};
`

export const HospitalIcon = styled(FontAwesome5)`

  font-size: ${RFValue(19)}px;
  color: ${(props) => props.theme.colors.MidGray};

`
export const HospitalName = styled.Text`

font-family: ${(props) => props.theme.Fonts.Medium} ;
font-size: ${RFValue(11)}px;
color: ${(props) => props.theme.colors.MidGray};
padding-left: ${RFValue(14)}px;
margin-Bottom:-5px;

`
export const HospitalAddress = styled.Text`

font-family: ${(props) => props.theme.Fonts.Medium} ;
font-size: ${RFValue(9)}px;
color: ${(props) => props.theme.colors.MidGray};
padding-left: ${RFValue(14)}px;

`