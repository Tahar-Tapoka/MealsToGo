import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { CameraScreen } from '../../components/features/settings/screens/camera.screen';
import FavoritessScreen from '../../components/features/settings/screens/favourites.screen';
import SettingsScreen from '../../components/features/settings/screens/settings.screen';

const Stack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
    >
      <Stack.Screen options={{ header: () => null }} name="Setting" component={SettingsScreen} />
      <Stack.Screen name="Favourites" component={FavoritessScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  );
};
