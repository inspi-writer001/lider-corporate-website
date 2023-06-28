// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBEfZSvQOy5cAa_5e2h6pLKcchxm8kyKYk',
  authDomain: 'lider2-df11f.firebaseapp.com',
  projectId: 'lider2-df11f',
  storageBucket: 'lider2-df11f.appspot.com',
  messagingSenderId: '939748185099',
  appId: '1:939748185099:web:457bed7a77c6f1900c630e',
  measurementId: 'G-1B32F33HTR',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
