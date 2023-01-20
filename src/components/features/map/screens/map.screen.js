import React, { useContext, useEffect, useState } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import { LocationContext } from '../../../../services/location/location.context';
import { RestaurantContext } from '../../../../services/restaurants/restaurant.context';
import RestaurantInfo from '../../restaurants/components/restaurent-info.component';
import { MapCallout } from '../components/map-callout.component';
import Search from '../components/search.component';

const MapContainer = styled.View`
  flex: 1;
`;
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
export default function MapsScreen({ navigation }) {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = location.viewport.northeast.lat;
    const southwestLat = location.viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, location.viewport]);

  return (
    <MapContainer>
      <Search />
      <Map
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                longitude: restaurant.geometry.location.lng,
                latitude: restaurant.geometry.location.lat,
              }}
            >
              <Callout
                onPress={() => {
                  navigation.navigate('RestaurantDetail', { item: restaurant });
                }}
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </MapContainer>
  );
}
