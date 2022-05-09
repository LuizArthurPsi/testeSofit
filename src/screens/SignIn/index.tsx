import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { Container, Title, Subtitle } from './styles';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';

export function SignIn() {
  const [email, setEmail] = useState('');
  const { signIn } = useAuth();

  function handleSignIn() {
    if (!email) {
      Alert.alert('Preencha com um e-mail válido!');
    } else {
      console.log(email);
      signIn(email);
    }
  }

  return (
    <Container>
      <Title>Adeus Despesas</Title>
      <Subtitle>controle suas finanças pessoais de maneira simples</Subtitle>

      <Input
        placeholder="e-mail"
        keyboardType="email-address"
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <Button
        title="Entrar"
        onPress={() => {
          handleSignIn();
        }}
      />
      <Subtitle>É rápido, fácil e sem cadastro</Subtitle>
    </Container>
  );
}
