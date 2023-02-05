import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../authentication/authentication.context';

export const FavouritesContext = createContext();
export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log('error loading', e);
    }
  };

  const add = (restaurant) => setFavourites([...favourites, restaurant]);
  const remove = (restaurant) => {
    const newFav = favourites.filter((res) => res.placeId !== restaurant.placeId);
    setFavourites(newFav);
  };

  useEffect(() => {
    if (user) loadFavourites(user.uid);
  }, [user]);

  useEffect(() => {
    if (user) saveFavourites(favourites, user.uid);
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
