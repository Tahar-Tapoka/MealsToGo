import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../../components/features/account/screens/account.screen';
import { LoginScreen } from '../../components/features/account/screens/login.screen';
import { RegisterScreen } from '../../components/features/account/screens/register.screen';

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
