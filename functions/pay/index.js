const url = require('url');
const { stripeKey } = require('../places/apiKey');

module.exports.payRequest = (request, response, client) => {
  const body = JSON.parse(request.body);
  const { token, amount, name } = body;
  client.payementsIntents
    .create({
      amount,
      currency: 'USD',
      payement_method_types: ['card'],
      payement_method_data: {
        type: 'card',
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((payementsIntent) => {
      response.json(payementsIntent);
    })
    .catch((e) => {
      console.log(e);
      response.status(400);
      response.send('something went wrong with the payement', e);
    });
  //   client
  //   .charges.retrieve(
  //     'ch_3MafdfLqXL9quRt90Aw4wjSR',
  //     {
  //       apiKey: stripeKey
  //     }
  //   ).then((res) => {
  //       return response.json(res.data);
  //     })
  //     .catch((e) => {
  //       response.status(400);
  //       return response.send(e.response.data.error_message);
  //     });
};
