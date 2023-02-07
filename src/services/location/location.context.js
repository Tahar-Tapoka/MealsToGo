import { createContext, useEffect, useState } from 'react';
import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [keyword, setKeyword] = useState('chicago');
  const [error, setError] = useState();

  const onSearch = (kWord) => {
    setIsLoading(true);
    setKeyword(kWord);
  };
  useEffect(() => {
    if (!keyword.length) return;
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((res) => {
        setLocation(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider value={{ location, isLoading, error, search: onSearch, keyword }}>
      {children}
    </LocationContext.Provider>
  );
};
