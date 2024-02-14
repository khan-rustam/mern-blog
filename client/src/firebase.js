/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d6620.firebaseapp.com",
  projectId: "mern-blog-d6620",
  storageBucket: "mern-blog-d6620.appspot.com",
  messagingSenderId: "232897633804",
  appId: "1:232897633804:web:b58ad07edb325939619829",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
