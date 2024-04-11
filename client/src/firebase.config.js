import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d63ec.firebaseapp.com",
  projectId: "mern-estate-d63ec",
  storageBucket: "mern-estate-d63ec.appspot.com",
  messagingSenderId: "1023420393989",
  appId: "1:1023420393989:web:f2372c3dac60940d0a4a6c"
};

export const app = initializeApp(firebaseConfig);