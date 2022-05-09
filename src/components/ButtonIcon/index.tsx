import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';
import theme from '../../global/styles/theme';

export function ButtonIcon({ icon, ...rest }: Props) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <Feather name="trash" size={22} color={theme.colors.background} />
    </Container>
  );
}
