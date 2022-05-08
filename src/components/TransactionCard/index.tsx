import React from 'react';

import {
  Container,
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
      <Title>{data.item}</Title>

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
