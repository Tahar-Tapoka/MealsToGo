import LottieView from 'lottie-react-native';
import { Text, View } from 'react-native';

import { Spacer } from '../../../spacer/spacer.component';
import {
  AccountBackground,
  AccountContainer,
  AnimationContainer,
  AuthButton,
  Title,
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AnimationContainer>
        <LottieView
          autoPlay
          key="animation"
          loop
          resizeMode="cover"
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require('../../../../../assets/watermelon.json')}
        />
      </AnimationContainer>
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
          New account
        </AuthButton>
      </AccountContainer>
      <View></View>
    </AccountBackground>
  );
};
