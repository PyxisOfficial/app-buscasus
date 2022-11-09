import styled from 'styled-components/native';
import { Feather, MaterialIcons  } from '@expo/vector-icons'; 
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({

  activeOpacity: .7
  
  })`
   margin-top: 24px;
   margin-left: 24px;
   margin-right: 24px;
  background-color: ${({theme}) => theme.colors.White};
  border-width: 1px;
  border-radius: 10px;
  border-color: ${({theme}) => theme.colors.MidGreen};
 justify-content: space-between;
 flex-direction: row ;
 align-items:center;
 padding-right:10px;
`;

export const Button = styled.View`

flex-direction:row;
align-items:center;

height:${(RFValue(60))}px;
width:90%;
padding-left:20px;

`
export const Icon = styled(Feather)`
margin-right: 14px;
font-size: ${(RFValue(20))}px;
color: ${({theme}) => theme.colors.MidGreen};

`
export const Content = styled.Text`
margin-top:5px;
font-family: ${(props) => props.theme.Fonts.Medium};
font-size: ${(RFValue(16))}px;
color: ${({theme}) => theme.colors.DarkGray};
`

export const Arrow = styled(MaterialIcons )`

font-size: ${(RFValue(20))}px;
color: ${({theme}) => theme.colors.MidGreen};

`