import { FlatList, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

import RestaurantInfo from '../components/restaurent-info.component';
import { SafeArea } from '../../../utility/safe-area.component';
import { useContext } from 'react';
import { RestaurantContext } from '../../../../services/restaurants/restaurant.context';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Search from '../components/search.component';

const ListView = styled.View`
    background-color: ${(props) => props.theme.colors.bg.primary}
    flex: 1
    padding: ${(props) => props.theme.space[3]}`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;
const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantContext);
  return (
    <SafeArea>
      <Search />
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
        <RestaurantList
          data={restaurantContext.restaurants}
          renderItem={({ item }) => {
            return <RestaurantInfo restaurant={item} />;
          }}
          key={({ item }) => item.placeId}
        />
      )}
      <ExpoStatusBar style="auto" />
    </SafeArea>
  );
};

export default RestaurantScreen;
