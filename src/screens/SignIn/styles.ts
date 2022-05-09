import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 32px;
  margin-top: 12px;
`;
