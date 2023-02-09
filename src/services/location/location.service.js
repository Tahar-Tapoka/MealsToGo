import camelize from 'camelize';
import { host, liveHost, isMock } from '../../utils/env';

export const locationRequest = (searchTerm) => {
  return fetch(`${liveHost}/geocode?city=${searchTerm}&mock=${isMock}`)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .catch((error) => {
      console.error('err: ', error);
    });
};
export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  console.log(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
