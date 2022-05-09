import React from 'react';
import { Modal } from 'react-native';
import HighlightCard from '../../components/HightlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

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
  Transactions,
  Title,
  TransactionsList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      item: 'Desenvolvimento de site',
      value: 22222,
      additionalInfo: 'asasasasa',
      date: '22/22/2222',
    },
    {
      id: '2',
      item: 'Desenvolvimento de site',
      value: 22222,
      additionalInfo: 'asasasasa',
      date: '22/22/2222',
    },
    {
      id: '3',
      item: 'Desenvolvimento de site',
      value: 22222,
      additionalInfo: 'asasasasa',
      date: '22/22/2222',
    },
  ];
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
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
