import React from 'react';
import { 
    Container,
    Button,
    Icon,
    Content,
    Arrow,
 } from './styles';


interface props {
    title:string
    icon: string
    onPress:() =>  void
    }
export function ProfileContent({ title, icon, onPress}: props) {
  return (
    <Container onPress={onPress}>
        <Button >
            <Icon name={icon}/>
            <Content>{title}</Content>
        </Button>

        <Arrow name='arrow-forward-ios' />
    </Container>
  );
}