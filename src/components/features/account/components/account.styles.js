import { ImageBackground } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components';
import { colors } from '../../../../infrastructure/theme/colors';

export const AccountCover = styled.View`
position: absolute
width: 100%
height:100%
background-color: rgba(255,255,255,0.3)
`;

export const AccountContainer = styled.View`
padding: ${(props) => props.theme.space[4]}
margine-top: ${(props) => props.theme.space[2]}
background-color: rgba(255,255,255,0.7)
max-width: 500px
width: 60%
justify-content: center`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
  mode: 'contained',
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const Title = styled.Text`
color: white
fontSize: 42px
lineHeight: 84px
fontWeight: bold
textAlign: center
backgroundColor: #000000c0
width: 500px`;

export const ErrorContainer = styled.View`
max-width: 300px
align-items: center
align-self:center
margine-top: ${(props) => props.theme.space[2]}
margine-bottom: ${(props) => props.theme.space[2]}
`;
export const AnimationContainer = styled.View`
width: 100%
height: 40%
position: absolute
top: 30px
padding: ${(props) => props.theme.space[2]}
`;

export const AccountBackground = ({ children }) => (
  <ImageBackground
    source={{
      uri: 'https://images.squarespace-cdn.com/content/v1/53a05cdee4b0c1bc44841a7b/1530298900873-3QT1EJ4FVFN3QEE1CSO4/101+Food+Photography+Tips+and+Tricks',
    }}
    resizeMode="cover"
    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
  >
    <AccountCover />
    {children}
  </ImageBackground>
);
