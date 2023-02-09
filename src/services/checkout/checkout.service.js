import createStripe from 'stripe-client';

const stripe = createStripe(
  'pk_test_51MZD1TLqXL9quRt99z48mNdkNUQuLZQdNsdz7S3kZBkyhNPnSYv4FSixlcK3ruqdY3cLan4ZeWcBeZsev6ldWoyh00m0eoVpr2'
);

export const cardTokenRequest = (card) => {
  return stripe.createToken({ card });
};
