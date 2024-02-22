// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3xRRPM1DvJJhAEg9T2tXiz8CuSBsvHnI",
  authDomain: "financetracker-7b65b.firebaseapp.com",
  projectId: "financetracker-7b65b",
  storageBucket: "financetracker-7b65b.appspot.com",
  messagingSenderId: "1001815688372",
  appId: "1:1001815688372:web:ca47cf6648c016771603e1",
  measurementId: "G-8X6B5W1SGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)