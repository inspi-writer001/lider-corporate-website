// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_firebase_apiKey,
  authDomain: import.meta.env.VITE_REACT_APP_firebase_authDomain,
  projectId: import.meta.env.VITE_REACT_APP_firebase_projectId,
  storageBucket: import.meta.env.VITE_REACT_APP_firebase_storageBucket,
  messagingSenderId: import.meta.env.VITE_REACT_APP_firebase_messagingSenderId,
  appId: import.meta.env.VITE_REACT_APP_firebase_apiKey,
  measurementId: import.meta.env.VITE_REACT_APP_firebase_measurementId
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
