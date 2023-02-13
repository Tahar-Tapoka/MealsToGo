import { Text } from '../../../typography/text.component';
import { SafeArea } from '../../../utility/safe-area.component';
import { CartIcon, CartIconContainer } from '../components/checkout.styles';

export const CheckoutSuccessScreen = () => (
  <SafeArea>
    <CartIconContainer>
      <CartIcon icon="check-bold" />
      <Text variant="label">Success!</Text>
    </CartIconContainer>
  </SafeArea>
);
