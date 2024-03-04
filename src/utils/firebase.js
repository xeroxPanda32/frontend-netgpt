// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqrKCrjo1qPMBlKnr4-IeLqsOhS4n2jQM",
  authDomain: "netflixgpt-1a3fa.firebaseapp.com",
  projectId: "netflixgpt-1a3fa",
  storageBucket: "netflixgpt-1a3fa.appspot.com",
  messagingSenderId: "143089907752",
  appId: "1:143089907752:web:2e72c8f32a7ed8e0dedd1d",
  measurementId: "G-XS7F42HDDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();