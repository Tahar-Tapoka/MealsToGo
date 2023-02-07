//const functions = require('firebase-functions');
const { mocks, addMockImages } = require('./mock');
const url = require('url');
const { apiKey } = require('./apiKey');

const addGoogleImage = (restaurant) => {};
module.exports.placesRequest = (request, response, client) => {
  const { location, mock } = url.parse(request.url, true).query;
  if (mock === 'true') {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImages);
    }
    return response.json(data);
  }
  client
    .placesNearby({
      params: {
        location,
        radius: 1500,
        type: 'restaurant',
        key: apiKey, //functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((res) => {
      res.data.results = res.data.results.map(addMockImages);
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      return response.send(e.response.data.error_message);
    });
};
