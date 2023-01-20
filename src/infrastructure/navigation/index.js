import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { Text, View } from 'react-native';

import { AuthContext } from '../../services/authentication/authentication.context';
import { AccountNavigator } from './account.navigator';
import { AppNavigator } from './app.navigator';

export const Navigation = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <NavigationContainer>{isAuth ? <AppNavigator /> : <AccountNavigator />}</NavigationContainer>
  );
};
