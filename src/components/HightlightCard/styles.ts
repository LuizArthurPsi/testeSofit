import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  width: 90%;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin: 0 20px;

  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  font-size: ${RFValue(32)}px;

  color: ${({ theme }) => theme.colors.text_dark};

  margin-top: 38px;
`;
export const LastSpending = styled.Text`
  font-size: ${RFValue(12)}px;

  color: ${({ theme }) => theme.colors.text_dark};
`;
