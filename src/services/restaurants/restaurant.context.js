import { createContext, useContext, useEffect, useState } from 'react';
import { LocationContext } from '../location/location.context';
import { restaurantRequest, restaurantsTransform } from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([1, 2, 3, 4, 5, 6]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const locationContext = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    restaurantRequest(loc)
      .then(restaurantsTransform)
      .then((res) => {
        setIsLoading(false);
        setRestaurants(res);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    if (locationContext.location) {
      const locationString = `${locationContext.location.lat},${locationContext.location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [locationContext.location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
