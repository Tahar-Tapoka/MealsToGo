import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../../../../services/authentication/authentication.context';

export default function SettingsScreen() {
  const { onLogout } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button onPress={() => onLogout()} title="Logout" />
    </View>
  );
}
