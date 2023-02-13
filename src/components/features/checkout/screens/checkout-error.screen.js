import { colors } from '../../../../infrastructure/theme/colors';
import { Text } from '../../../typography/text.component';
import { SafeArea } from '../../../utility/safe-area.component';
import { CartIcon, CartIconContainer } from '../components/checkout.styles';

export const CheckoutErrorScreen = ({ route }) => {
  const { error = '' } = route.params;
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
