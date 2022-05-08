import React from 'react';
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastSpending,
} from './styles';

export default function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Despesas</Title>
        <Icon name="dollar-sign" />
      </Header>

      <Footer>
        <Amount>R$ 17.000,00</Amount>
        <LastSpending>Última entrada dia 8 de maio.</LastSpending>
      </Footer>
    </Container>
  );
}
