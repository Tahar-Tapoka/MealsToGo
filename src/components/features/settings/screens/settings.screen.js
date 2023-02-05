import { useContext } from 'react';
import { Avatar, List } from 'react-native-paper';
import styled from 'styled-components';
import { AuthContext } from '../../../../services/authentication/authentication.context';
import { Spacer } from '../../../spacer/spacer.component';
import { Text } from '../../../typography/text.component';
import { SafeArea } from '../../../utility/safe-area.component';

export default function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthContext);

  const SettingsItem = styled(List.Item)`
    padding: ${(props) => props.theme.space[3]};
  `;
  const AvatarContainer = styled.View`
    align-items: center;
  `;

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" />
        <Spacer position="top" size="large" />
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View ur Favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  );
}
