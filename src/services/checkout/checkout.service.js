import createStripe from 'stripe-client';
import { host } from '../../utils/env';

const stripe = createStripe(
  'pk_test_51MZD1TLqXL9quRt99z48mNdkNUQuLZQdNsdz7S3kZBkyhNPnSYv4FSixlcK3ruqdY3cLan4ZeWcBeZsev6ldWoyh00m0eoVpr2'
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: 'POST',
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject('something went wrong processing your payment');
    }
    return res.json();
  });
};
