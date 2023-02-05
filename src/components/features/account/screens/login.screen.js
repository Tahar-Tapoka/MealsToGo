import { useContext, useState } from 'react';
import { TextInput } from 'react-native-paper';
import { AuthContext } from '../../../../services/authentication/authentication.context';
import { Spacer } from '../../../spacer/spacer.component';
import { Text } from '../../../typography/text.component';
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  ErrorContainer,
  Title,
} from '../components/account.styles';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { onLogin, error, isLoading } = useContext(AuthContext);
  return (
    <AccountBackground>
      <Title>Meals to Go</Title>
      <Spacer size="large" />
      <AccountContainer>
        <TextInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <Spacer size="large" />
        <TextInput
          label="Password"
          autoCapitalize="none"
          textContentType="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Spacer size="large" />
        <Spacer size="large" />
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        {!isLoading ? (
          <AuthButton icon="login" onPress={() => onLogin(email, password)}>
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.red800} />
        )}

        <Spacer size="large" />
        <AuthButton
          icon="backburger"
          onPress={() => {
            navigation.goBack();
          }}
        >
          Go back
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
