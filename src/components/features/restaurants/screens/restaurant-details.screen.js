import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { SafeArea } from '../../../utility/safe-area.component';

import RestaurantInfo from '../components/restaurent-info.component';

export const RestaurantDetailsScreen = ({ route }) => {
  const { restaurant } = route.params;
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
    </SafeArea>
  );
};
