import { FlatList, TouchableOpacity, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

import RestaurantInfo from '../components/restaurent-info.component';
import { SafeArea } from '../../../utility/safe-area.component';
import { useContext, useState } from 'react';
import { RestaurantContext } from '../../../../services/restaurants/restaurant.context';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Search from '../components/search.component';
import { FavouritesContext } from '../../../../services/favourites/favourites.context';
import { FavouritesBar } from '../../../favourites/favourites-bar.component';
import { FadeInView } from '../../../animations/fade.animation';

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantScreen = ({ navigation }) => {
  const restaurantContext = useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search onFavouritesToggled={() => setIsToggled((tg) => !tg)} favouritesToggled={isToggled} />
      {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}
      {restaurantContext.isLoading && (
        <View style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <ActivityIndicator
            animating={true}
            size={50}
            style={{ marginLeft: -25 }}
            color={MD2Colors.blue300}
          />
        </View>
      )}
      {!restaurantContext.isLoading && (
        <FadeInView>
          <RestaurantList
            data={restaurantContext.restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('RestaurantDetail', { item });
                  }}
                >
                  <RestaurantInfo restaurant={item} />
                </TouchableOpacity>
              );
            }}
            key={({ item }) => item.placeId}
          />
        </FadeInView>
      )}
      <ExpoStatusBar style="auto" />
    </SafeArea>
  );
};
