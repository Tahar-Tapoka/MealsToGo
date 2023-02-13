import styled from 'styled-components/native';
import { ActivityIndicator, Button, Colors, Avatar, TextInput } from 'react-native-paper';
import { colors } from '../../../../infrastructure/theme/colors';

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 160,
  icon: 'cart-off',
  marginBottom: 30,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;

export const CartIconContainer = styled.View`
  flex:1
  align-items: center;
  justify-content: center;
`;

export const NameInput = styled(TextInput).attrs({ label: 'Name' })`
  margin: ${(props) => props.theme.space[3]};
`;

export const CreditCardWrapper = styled.View`
  flex-direction: row;
`;

export const CreditCardButton = styled(Button).attrs({
  icon: 'credit-card-check-outline',
  mode: 'contained',
})`
width:90%
align-self:center
`;
export const PayButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
  icon: 'cart-check',
  mode: 'contained',
})`
padding:${(props) => props.theme.space[2]}
margin: ${(props) => props.theme.space[2]}
width:40%
align-self:center
`;
export const ClearButton = styled(Button).attrs({
  buttonColor: colors.brand.muted,
  icon: 'cart-remove',
  mode: 'contained',
})`
padding:${(props) => props.theme.space[2]}
margin: ${(props) => props.theme.space[2]}
width:40%
align-self:center
`;
export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: 128,
  animating: true,
  color: colors.brand.primary,
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;
