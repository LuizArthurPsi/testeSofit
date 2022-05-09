import React from 'react';
import { ButtonIcon } from '../ButtonIcon';

import {
  Container,
  Header,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Data,
} from './styles';

export interface TransactionCardProps {
  item: string;
  value: number;
  additionalInfo: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Header>
        <Title>{data.item}</Title>
        <ButtonIcon />
      </Header>
      <Amount>{data.value}</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategoryName>{data.additionalInfo}</CategoryName>
        </Category>
        <Data>{data.date}</Data>
      </Footer>
    </Container>
  );
}
