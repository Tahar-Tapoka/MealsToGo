import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../authentication/authentication.context';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0);

  const add = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setCart([item]);
      setRestaurant(rst);
    } else setCart([...cart, item]);
  };

  const clear = () => {
    setCart([]);
    setRestaurant(null);
  };

  const remove = (restaurant) => {
    const newCart = cart.filter((res) => res.placeId !== restaurant.placeId);
    setCart(newCart);
  };

  const saveCart = async (rst, crt, uid) => {
    try {
      const jsonValue = JSON.stringify({ restaurant: rst, cart: crt });
      await AsyncStorage.setItem(`@cart-${uid}`, jsonValue);
    } catch (e) {
      console.log('error storing cart', e);
    }
  };

  const loadCart = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@cart-${uid}`);
      if (value !== null) {
        const { restaurant: rst, cart: crt } = JSON.parse(value);
        setRestaurant(rst);
        setCart(crt);
        //saveCart(restaurant, cart, user);
      }
    } catch (e) {
      console.log('error loading cart', e);
    }
  };

  useEffect(() => {
    if (user) loadCart(user.uid);
  }, [user]);

  useEffect(() => {
    if (user && user.uid) saveCart(restaurant, cart, user.uid);
  }, [restaurant, cart, user]);

  useEffect(() => {
    if (!cart.length) return;
    const newSum = cart.reduce((acc, { price }) => acc + price, 0);
    setSum(newSum);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, restaurant, sum, addToCart: add, removeFromCart: remove, clearCart: clear }}
    >
      {children}
    </CartContext.Provider>
  );
};
