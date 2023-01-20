import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RestaurantDetailsScreen } from '../../components/features/restaurants/screens/restaurant-details.screen';
import { RestaurantScreen } from '../../components/features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{ headerShown: false, ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen name="Restaurants stack" component={RestaurantScreen} />
      <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetailsScreen} />
    </RestaurantStack.Navigator>
  );
};
