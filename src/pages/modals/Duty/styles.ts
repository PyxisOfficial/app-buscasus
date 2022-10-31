import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Octicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.BACKGROUND};
 `;

export const Title  = styled.Text`

  font-family: ${(props) => props.theme.Fonts.Medium} ;
  font-size: ${RFValue(25)}px;
  color: ${(props) => props.theme.colors.MidGreen};

`

export const Header = styled.View`
    align-items: center;
    justify-content: center; 
    margin-top:${RFValue(80)}px;
    padding-bottom:${RFValue(30)}px;
    


`
   export const DoctorsList = styled.FlatList`
 
   `
   export const DoctorInfo = styled.View`
   margin: ${RFValue(14)}px ${RFValue(24)}px;
   flex-direction: row;
   background-color: ${(props) => props.theme.colors.DarkGreen};
   padding:${RFValue(10)}px  ${RFValue(20)}px ;
   border-radius: 100px;
   height:${(RFValue(55))}px;
   width:${(RFValue(200))}px;
   `

   export const Info = styled.View`
   
   `
   export const Name = styled.Text`
    font-family: ${(props) => props.theme.Fonts.Medium} ;
  font-size: ${RFValue(12)}px;
  color: ${(props) => props.theme.colors.White};
   `
   export const Specialty = styled.Text`
   margin-top: -5px;
    font-family: ${(props) => props.theme.Fonts.Regular} ;
  font-size: ${RFValue(10)}px;
  color: ${(props) => props.theme.colors.White};
   `
      export const DutyInfo = styled.View`
   
      border-width: 3.5px;
      border-color: ${(props) => props.theme.colors.BACKGROUND};
      flex-direction: row;
      background-color: ${(props) => props.theme.colors.MidGreen};
      padding:${RFValue(12)}px  ${RFValue(15)}px ;
      border-radius: 100px;
      height:${(RFValue(65))}px;
      width:${(RFValue(175))}px;
      position: absolute;
      margin: ${(RFValue(-5))}px ${(RFValue(0))}px ${(RFValue(0))}px ${(RFValue(165))}px;
      `
     export const Start = styled.Text`
      font-family: ${(props) => props.theme.Fonts.Regular} ;
      font-size: ${RFValue(10)}px;
      color: ${(props) => props.theme.colors.White};
    `
      export const End = styled.Text`
      font-family: ${(props) => props.theme.Fonts.Regular} ;
    font-size: ${RFValue(10)}px;
    color: ${(props) => props.theme.colors.White};
     `

export const Filds = styled.View`
flex: 0.9;

`
export const Footer = styled.View`
flex:.1;
padding: 30px;

`