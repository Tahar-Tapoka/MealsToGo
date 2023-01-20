import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCa93HgGObJBbLVOZQs_HIpZuRqQHnDI0M',
  authDomain: 'mealstogo-5621c.firebaseapp.com',
  projectId: 'mealstogo-5621c',
  storageBucket: 'mealstogo-5621c.appspot.com',
  messagingSenderId: '938103308440',
  appId: '1:938103308440:web:6f70cfe13e0116a2a410ed',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
};
