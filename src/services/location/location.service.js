import camelize from 'camelize';
import { host, liveHost } from '../../utils/env';

export const locationRequest = (searchTerm) => {
  return fetch(`${liveHost}/geocode?city=${searchTerm}`)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.error('err: ', error);
    });
};

export const locationTransform = (result) => {
  console.log(result);
  const { geometry = {} } = camelize(result.results)[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
