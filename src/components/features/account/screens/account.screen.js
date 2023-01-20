import { Text, View } from 'react-native';

import { Spacer } from '../../../spacer/spacer.component';
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  Title,
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <Title>Meals to Go</Title>
      <Spacer size="large" />
      <AccountContainer>
        <AuthButton
          icon="login"
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton
          icon="open-in-new"
          onPress={() => {
            navigation.navigate('Register');
          }}
        >
          Create an account
        </AuthButton>
      </AccountContainer>
      <View></View>
    </AccountBackground>
  );
};
