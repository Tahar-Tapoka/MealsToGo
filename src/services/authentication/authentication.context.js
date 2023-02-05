import { createContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCa93HgGObJBbLVOZQs_HIpZuRqQHnDI0M',
  authDomain: 'mealstogo-5621c.firebaseapp.com',
  projectId: 'mealstogo-5621c',
  storageBucket: 'mealstogo-5621c.appspot.com',
  messagingSenderId: '938103308440',
  appId: '1:938103308440:web:6f70cfe13e0116a2a410ed',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
    setIsLoading(false);
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((u) => {
        const user = u.user;
        setUser(u);
      })
      .catch((e) => {
        setError(e.toString());
      });
    setIsLoading(false);
  };

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        setError(error.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password === repeatedPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((u) => {
          setUser(u);
        })
        .catch((e) => {
          setError(e.toString());
        });
    } else setError('Please check ur password pls!');
    setIsLoading(false);
  };
  return (
    <AuthContext.Provider
      value={{ user, isLoading, error, isAuth: !!user, onLogin, onLogout, onRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
};
