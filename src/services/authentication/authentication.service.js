import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};
