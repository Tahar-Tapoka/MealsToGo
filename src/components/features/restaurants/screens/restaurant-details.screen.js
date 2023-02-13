import { useContext } from 'react';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { CartContext } from '../../../../services/cart/cart.context';
import { Spacer } from '../../../spacer/spacer.component';
import { SafeArea } from '../../../utility/safe-area.component';
import { OrderButton } from '../components/restaurant-info-card.styles';

import RestaurantInfo from '../components/restaurent-info.component';

export const RestaurantDetailsScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);
  const orderPressedHandler = () => {
    addToCart({ item: 'special', price: 1299 }, restaurant);
    navigation.goBack(); //there's a better way for  sure
    navigation.navigate('Checkouts');
  };
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Section>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion title="Lunch" left={(props) => <List.Icon {...props} icon="hamburger" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion title="Drinks" left={(props) => <List.Icon {...props} icon="beer" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton onPress={() => orderPressedHandler()}>Order special only 12.99</OrderButton>
      </Spacer>
    </SafeArea>
  );
};
