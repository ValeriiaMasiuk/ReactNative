import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyAsPanl6j1J0o7sIJYfDENicqwfYc4tg60",
  authDomain: "reactnative-47b25.firebaseapp.com",
  projectId: "reactnative-47b25",
  storageBucket: "reactnative-47b25.appspot.com",
  messagingSenderId: "16888939321",
  appId: "1:16888939321:web:4097631198f654fbc61ee8",
  measurementId: "G-P5L3WFERYH"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
  