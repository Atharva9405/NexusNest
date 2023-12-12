// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nexusnest-24867.firebaseapp.com",
  projectId: "nexusnest-24867",
  storageBucket: "nexusnest-24867.appspot.com",
  messagingSenderId: "180802382747",
  appId: "1:180802382747:web:48257f623e5a1ba1e7cf3e",
  measurementId: "G-CX3705DKF0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);