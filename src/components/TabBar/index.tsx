import React from 'react';
import { 
    Container,
    UserAccont,
    TabSearch,
    VoiceSearchButton,
    VoiceIcon,
    UserAccontButton,
    TabSearchButton,
 } from './styles';

 import { useNavigation } from '@react-navigation/native';

export function TabBar() {

    const navigation = useNavigation();
  return (
    <Container>

        <UserAccontButton>
          <UserAccont
            name='ios-menu'
            onPress={() => navigation.openDrawer()}
          />
        </UserAccontButton>

        <VoiceSearchButton>
          <VoiceIcon name="mic" />
        </VoiceSearchButton>

        <TabSearchButton
          onPress={() => navigation.navigate('Dashboard')}>
          <TabSearch name='home' />
        </TabSearchButton>


    </Container>
  );
}