import AsyncStorage from '@react-native-async-storage/async-storage';
import { Camera, CameraType } from 'expo-camera';
import { useContext, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components';
import { AuthContext } from '../../../../services/authentication/authentication.context';
import { Text } from '../../../typography/text.component';

const ProfileCamera = styled(Camera)`
width: 100%
height:100%`;
const ButtonContainer = styled.View`
flex: 1
flex-direction: row
background-color: transparent
margin: 64px`;

export const CameraScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { user } = useContext(AuthContext);
  const cameraRef = useRef();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }
  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text center variant="label">
          We need your permission to show the camera
        </Text>
        <AuthButton onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <ProfileCamera
        ref={(cam) => (cameraRef.current = cam)}
        style={styles.camera}
        type={CameraType.front}
      >
        <ButtonContainer>
          <TouchableOpacity style={styles.button} onPress={snap}>
            <Text center variant="label">
              Take a picture handsom!
            </Text>
          </TouchableOpacity>
        </ButtonContainer>
      </ProfileCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
