import React from 'react';
import HighlightCard from '../../components/HightlightCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreetings,
  UserName,
  Icon,
} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/81298159?v=4',
              }}
            />
            <User>
              <UserGreetings>Olá, </UserGreetings>
              <UserName>Arthur</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCard />
    </Container>
  );
}
