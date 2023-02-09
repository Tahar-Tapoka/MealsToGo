import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { FavouritesContext } from '../../../../services/favourites/favourites.context';
import { Text } from '../../../typography/text.component';
import RestaurantInfo from '../../restaurants/components/restaurent-info.component';
import { RestaurantList } from '../../restaurants/screens/restaurants.screen';

const NoFavArea = styled.View`
  align-items: center;
  justify-content: center;
`;

export default function FavoritessScreen({ navigation }) {
  const { favourites } = useContext(FavouritesContext);

  return !favourites.length ? (
    <NoFavArea>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Restaurants');
        }}
      >
        <Text center>No favorites yet? Go back on add some Favorites</Text>
      </TouchableOpacity>
    </NoFavArea>
  ) : (
    <RestaurantList
      data={favourites}
      renderItem={({ restaurant }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RestaurantDetail', { restaurant });
            }}
          >
            <RestaurantInfo restaurant={restaurant} />
          </TouchableOpacity>
        );
      }}
      key={({ restaurant }) => restaurant.placeId}
    />
  );
}
