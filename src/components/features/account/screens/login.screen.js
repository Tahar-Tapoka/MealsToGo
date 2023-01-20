import { useContext, useState } from 'react';
import { TextInput } from 'react-native-paper';
import { AuthContext } from '../../../../services/authentication/authentication.context';
import { Spacer } from '../../../spacer/spacer.component';
import { Text } from '../../../typography/text.component';
import {
  AccountBackground,
  AccountContainer,
  AuthButton,
  Title,
} from '../components/account.styles';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { onLogin, error } = useContext(AuthContext);
  return (
    <AccountBackground>
      {/* <TextInput
        label="Email"
        render={(props) => <TextInputMask {...props} mask="[*]@[*].[*]" />}
      /> */}
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
        {error && <Text variant="error">{error}</Text>}
        <AuthButton icon="login" onPress={() => onLogin(email, password)}>
          Login
        </AuthButton>
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
