import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { initializeApp } from 'firebase/app';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { theme } from './src/infrastructure/theme';
import { RestaurantContextProvider } from './src/services/restaurants/restaurant.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { Navigation } from './src/infrastructure/navigation';
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';
import { useEffect, useState } from 'react';
import { AuthContextProvider } from './src/services/authentication/authentication.context';

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: 'AIzaSyCa93HgGObJBbLVOZQs_HIpZuRqQHnDI0M',
//   authDomain: 'mealstogo-5621c.firebaseapp.com',
//   projectId: 'mealstogo-5621c',
//   storageBucket: 'mealstogo-5621c.appspot.com',
//   messagingSenderId: '938103308440',
//   appId: '1:938103308440:web:6f70cfe13e0116a2a410ed',
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default function App() {
  // const [isAuth, setIsAuth] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     signInWithEmailAndPassword(auth, 'email@taha.taha', 'password')
  //       .then((userCredential) => {
  //         // Signed inn
  //         const user = userCredential.user;
  //         console.log(user);
  //         setIsAuth(true);
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(errorCode, '  ', errorMessage);
  //       });
  //   }, 2000);
  // }, []);
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) return null;
  //if (!isAuth) return null;

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
