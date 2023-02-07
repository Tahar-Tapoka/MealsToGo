export const liveHost = 'https://us-central1-mealstogo-5621c.cloudfunctions.net';
export const localHost = 'http://127.0.0.1:5001/mealstogo-5621c/us-central1';
export const isDev = process.env.NODE_ENV === 'development';
export const host = isDev ? localHost : liveHost;
