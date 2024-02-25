// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b544d.firebaseapp.com",
  projectId: "mern-estate-b544d",
  storageBucket: "mern-estate-b544d.appspot.com",
  messagingSenderId: "1043402932166",
  appId: "1:1043402932166:web:610c1bc15033c39cbf3cc7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);