import camelize from 'camelize';
import { host, liveHost } from '../../utils/env';

export const restaurantRequest = (location = '51.219448,4.402464') => {
  return fetch(`${liveHost}/placesNearby?location=${location}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error('err: ', error);
    });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((res) => {
    return {
      ...res,
      isClosedTemporarily: res.business_status === 'CLOSED_TEMPORARILY',
      isOpenNow: res.opening_hours && res.opening_hours.open_now,
      address: res.vicinity,
    };
  });
  const newResults = camelize(mappedResults);
  //console.log(mappedResults);
  return newResults;
};
