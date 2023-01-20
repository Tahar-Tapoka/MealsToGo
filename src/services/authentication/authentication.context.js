import { createContext, useState } from 'react';
import { loginRequest, registerRequest } from './authentication.service';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState();

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
      })
      .catch((e) => {
        setError(e.toString());
      });
    setIsLoading(false);
  };

  const onLogout = () => {};

  const onRegister = (email, password, repeatedPassword) => {
    if (password === repeatedPassword) {
      setIsLoading(true);
      registerRequest(email, password)
        .then((u) => {
          setUser(u);
        })
        .catch((e) => {
          setError(e.toString());
        });
    } else setError('Please check ur password agaian');
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
