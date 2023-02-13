import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, List } from 'react-native-paper';
import styled from 'styled-components';
import { AuthContext } from '../../../../services/authentication/authentication.context';
import { Spacer } from '../../../spacer/spacer.component';
import { Text } from '../../../typography/text.component';
import { SafeArea } from '../../../utility/safe-area.component';
import { colors } from '../../../../infrastructure/theme/colors';
import { AccountBackground } from '../../account/components/account.styles';

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.6);
`;
const AvatarContainer = styled.View`
  align-items: center;
`;
const SettingsBackground = styled.ImageBackground.attrs({
  source: {
    uri: 'https://images.squarespace-cdn.com/content/v1/53a05cdee4b0c1bc44841a7b/1530298900873-3QT1EJ4FVFN3QEE1CSO4/101+Food+Photography+Tips+and+Tricks',
  },
})`
width: 100%
height: 100%
position: absolute`;
const SettingsSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

export default function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthContext);
  const [photo, setPhoto] = useState();

  const loadPic = async (Curruser) => {
    const photoUri = await AsyncStorage.getItem(`${Curruser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      loadPic(user);
    }, [user])
  );

  return (
    <SettingsSafeArea>
      <SettingsBackground>
        <Spacer size="large" />
        <AvatarContainer>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CameraScreen');
            }}
          >
            {!photo ? (
              <Avatar.Icon size={180} icon="human" backgroundColor={colors.brand.primary} />
            ) : (
              <Avatar.Image size={180} source={{ uri: photo }} />
            )}
          </TouchableOpacity>
          <Spacer position="top" />
          <Text variant="label">{user.email}</Text>
          <Spacer size="large" />
        </AvatarContainer>
        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View ur Favourites"
            left={(props) => <List.Icon {...props} color={colors.ui.error} icon="heart" />}
            onPress={() => navigation.navigate('Favourites')}
          />
          <Spacer />
          <SettingsItem
            title="Payement"
            left={(props) => <List.Icon {...props} color={colors.brand.secondary} icon="cart" />}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title="Past Orders"
            left={(props) => <List.Icon {...props} color={colors.brand.secondary} icon="history" />}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title="Logout"
            left={(props) => <List.Icon {...props} color={colors.brand.secondary} icon="door" />}
            onPress={() => onLogout()}
          />
        </List.Section>
      </SettingsBackground>
    </SettingsSafeArea>
  );
}
