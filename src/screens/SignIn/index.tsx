import React from 'react';

import { Container, Title, Subtitle } from './styles';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';

export function SignIn() {
  return (
    <Container>
      <Title>Adeus Despesas</Title>
      <Subtitle>controle suas finanças pessoais de maneira simples</Subtitle>

      <Input placeholder="e-mail" keyboardType="email-address" />

      <Button title="Entrar" onPress={() => {}} />
      <Subtitle>É rápido, fácil e sem cadastro</Subtitle>
    </Container>
  );
}
