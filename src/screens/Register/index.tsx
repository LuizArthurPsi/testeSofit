import React, { useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Input } from '../../components/Form/Input';

import { Container, Form, Header, Title, Fields } from './styles';

export function Register() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  function handleRegister() {
    if (!name || !price) {
      Alert.alert('Insira valores válidos');
    } else {
      const data = {
        Name: name,
        Price: price,
        Info: additionalInfo,
      };
      console.log(data);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <Input
              placeholder="Nome"
              onChangeText={setName}
              autoCapitalize="sentences"
              autoCorrect={false}
            />

            <Input
              placeholder="Valor"
              onChangeText={setPrice}
              keyboardType="numeric"
            />

            <Input
              placeholder="Informações adicionais"
              onChangeText={setAdditionalInfo}
              autoCapitalize="sentences"
              autoCorrect={false}
            />
          </Fields>

          <Button
            title="Enviar"
            onPress={() => {
              handleRegister();
            }}
          />
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}
