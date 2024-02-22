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
  apiKey: "AIzaSyDbUJ99jArI_ZyF4MXDI9FVelzBewsbNGM",
  authDomain: "anjesh-bhattarai.firebaseapp.com",
  projectId: "anjesh-bhattarai",
  storageBucket: "anjesh-bhattarai.appspot.com",
  messagingSenderId: "658652410968",
  appId: "1:658652410968:web:0ad20e2d1d9c70aaf8462d",
  measurementId: "G-W6JCKXXM3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)