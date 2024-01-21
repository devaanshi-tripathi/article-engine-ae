// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APP_ID,
  apiKey: "AIzaSyASsiHongjZWxkXy24oij0CJNoh8ZqaroQ",
  authDomain: "article-engine-36c42.firebaseapp.com",
  projectId: "article-engine-36c42",
  storageBucket: "article-engine-36c42.appspot.com",
  messagingSenderId: "901964566301",
  appId: "1:901964566301:web:93fa936a04d3b0b569dbf4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
