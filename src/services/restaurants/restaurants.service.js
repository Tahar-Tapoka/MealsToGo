import camelize from 'camelize';
import { mockImages, mocks } from './mock';

export const restaurantRequest = (location = '51.219448,4.402464') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject('Not found');
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((res) => {
    res.photos = res.photos.map(
      (p) => mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
    );
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
