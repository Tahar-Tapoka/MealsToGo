import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MapsScreen from '../../components/features/map/screens/map.screen';
import { RestaurantsNavigator } from './restaurants.navigator';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { RestaurantContextProvider } from '../../services/restaurants/restaurant.context';
import { SettingsNavigator } from './settings.navigator';
import { CheckoutScreen } from '../../components/features/checkout/screens/checkout.screen';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Checkout: 'md-cart',
  Maps: 'md-map',
  Settings: 'md-settings',
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantContextProvider>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Checkout" component={CheckoutScreen} />
          <Tab.Screen name="Maps" component={MapsScreen} />
          <Tab.Screen name="SettingsNav" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
