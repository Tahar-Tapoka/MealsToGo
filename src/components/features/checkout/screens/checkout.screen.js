import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { CartContext } from '../../../../services/cart/cart.context';
import { payRequest } from '../../../../services/checkout/checkout.service';
import { Spacer } from '../../../spacer/spacer.component';
import { Text } from '../../../typography/text.component';

import { SafeArea } from '../../../utility/safe-area.component';
import RestaurantInfo from '../../restaurants/components/restaurent-info.component';
import {
  ButtonContainer,
  CartIcon,
  CartIconContainer,
  ClearButton,
  PayButton,
  PaymentProcessing,
} from '../components/checkout.styles';
import { CreditCardInput } from '../components/credit-card.component';

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate('CheckoutError', {
        error: 'Please fill in a valid credit card',
      });
      return;
    }
    console.log(card);
    payRequest(card.id, sum, card.name)
      .then((res) => {
        setIsLoading(false);
        clearCart();
        navigation.navigate('CheckoutSuccess');
      })
      .catch((e) => {
        setIsLoading(false);
        navigation.navigate('CheckoutError', {
          error: e,
        });
      });
  };

  if (!cart.length || !restaurant) {
    return (
      <CartIconContainer>
        <CartIcon />
        <Text>Your cart is empty</Text>
      </CartIconContainer>
    );
  }
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      {isLoading && <PaymentProcessing />}
      <ScrollView>
        <Spacer position="left" size="large">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => (
              <List.Item key={Math.random()} title={`${item} - ${price / 100}$`} />
            ))}
          </List.Section>
          <Text>Total : {sum / 100}</Text>
        </Spacer>
        <CreditCardInput
          onSuccess={setCard}
          onError={() =>
            navigation.navigate('CheckoutError', {
              error: 'Something went wrong processing your credit card',
            })
          }
        />
        <ButtonContainer>
          <PayButton onPress={onPay} disabled={isLoading}>
            Pay
          </PayButton>
          <ClearButton onPress={clearCart} disabled={isLoading}>
            Clear
          </ClearButton>
        </ButtonContainer>
      </ScrollView>
    </SafeArea>
  );
};
